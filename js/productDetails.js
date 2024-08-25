import * as f from "./functions.js";

export function productDetails(arr, num) {
    if (Number.isSafeInteger(num) === false) {
        return 'ERROR: antroji įvestis turi būti sveikas teigiamas skaičius';
    }

    const objFromArr = arr.filter(n => n.id === num)[0];
    if (objFromArr === undefined) {
        return `Prekė, su ID: ${num} neegzistuoja.`;
    }

    const arrError = f.validateArr(arr);    
    if (arrError !== false) {
        return arrError;
    }

    const requiredKeys = [ 'id', 'name', 'amount', 'unitPrice' ];
    const objInArrError = f.validateObjInArr(arr, requiredKeys);    
    if (objInArrError !== false) {
        return objInArrError;
    }

    const objContInArrError = f.validateObjContentInArray(arr);;    
    if (objContInArrError !== false) {
        return objContInArrError ;
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
