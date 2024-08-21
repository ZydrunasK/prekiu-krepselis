import * as f from "./functions.js";

export function productDetails(arr, num) {
    if (Number.isSafeInteger(num) === false) {
        return 'ERROR: antroji įvestis turi būti sveikas teigiamas skaičius';
    }
    if (!Array.isArray(arr)) {
        return 'ERROR: įvestis turi būti masyvas';
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 0) {
            return `ERROR: Prekė, su ID: ${num} neegzistuoja.`;
        };
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return `ERROR: objektas ${i + 1} negali būti masyvas`;
        }
    }

    const requiredKeys = [ 'id', 'name', 'amount', 'unitPrice' ];
    f.validateObjInArr(arr, requiredKeys);

    for (let i = 0; i < arr.length; i++) {
        if (!Number.isSafeInteger(arr[i].id) || arr[i].id < 0) {
            return `ERROR: id reikšmė neteisinga objekte ${i + 1}`;
        }
        if (typeof arr[i].name !== 'string') {
            return `ERROR: pavadinimas objekte ${i + 1} turi būti string tipo`;
        }
        if (!Number.isSafeInteger(arr[i].amount) || arr[i].amount < 0) {
            return `ERROR: Objekto ${i + 1} įvestas amount turi būti sveikasis teigiamas skaičius`;
        }
        if (!Number.isSafeInteger(arr[i].unitPrice) || arr[i].unitPrice < 0) {
            return `ERROR: unit price įvestis objekte ${i + 1} turi būti sveikasis teigiamas skaičius`;
        }
    }

    const objFromArr = arr.filter(n => n.id === num)[0];
    if (objFromArr === undefined) {
        return `Prekė, su ID: ${num} neegzistuoja.`;
    }

    const obj = [];             
    obj.push(objFromArr.id);
    obj.push(objFromArr.name); 
    obj.push(f.formatAmount(objFromArr.amount)); 
    obj.push(f.formatPrice(objFromArr.unitPrice));
    obj.push(f.formatPrice(objFromArr.unitPrice * objFromArr.amount));


    let objL = [...obj].sort((a, b) => b.toString().length - a.toString().length);
    objL = objL[0].length;

    const list = ['ID', 'Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];
    let listL = [...list].sort((a, b) => b.length - a.length);
    listL = listL[0].length;

    const title = 'Prekės informacija';
    const line = `${'-'.repeat(objL + listL + 3)}`;
    
    let table = '';
    for (let i = 0; i < obj.length; i++) {
        table += (`${list[i]} ${' '.repeat(listL - list[i].length)}| ${obj[i]}\n`);
    }

    return f.frankestein(line, title, table);
}
