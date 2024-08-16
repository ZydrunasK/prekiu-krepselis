export function productDetails(arr, num) {
    const objKeys = [ 'id', 'name', 'amount', 'unitPrice' ];

    if (Number.isSafeInteger(num) === false) {
        return 'ERROR: antroji įvestis turi būti sveikas teigiamas skaičius'
    }
    if (!Array.isArray(arr)) {
        return 'ERROR: įvestis turi būti masyvas'
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 0) {
            return `ERROR: Prekė, su ID: ${num} neegzistuoja.`
        };
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return `ERROR: objektas ${i + 1} negali būti masyvas`
        };
    }
    
    for (let i = 0; i < arr.length; i++) {
        if ((Object.keys(arr[i])[0]) !== objKeys[0]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
        if ((Object.keys(arr[i])[1]) !== objKeys[1]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
        if ((Object.keys(arr[i])[2]) !== objKeys[2]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
        if ((Object.keys(arr[i])[3]) !== objKeys[3]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
    }
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isSafeInteger(arr[i].id) || arr[i].id < 0) {
            return `ERROR: id reikšmė neteisinga objekte ${i + 1}`
        };
        if (typeof arr[i].name !== 'string') {
            return `ERROR: pavadinimas objekte ${i + 1} turi būti string tipo`
        };
        if (!Number.isSafeInteger(arr[i].amount) || arr[i].amount < 0) {
            return `ERROR: Objekto ${i + 1} įvestas amount turi būti sveikasis teigiamas skaičius`
        };
        if (!Number.isSafeInteger(arr[i].unitPrice) || arr[i].unitPrice < 0) {
            return `ERROR: unit price įvestis objekte ${i + 1} turi būti sveikasis teigiamas skaičius`
        };
    }

    arr = arr.filter(n => n.id === num);
    arr = arr[0];

    if (arr === undefined) {
        return `Prekė, su ID: ${num} neegzistuoja.`
    }

    let obj = [];
    // pushes each object key into its own array   
    obj.push(arr.id)
    obj.push(arr.name); 
    obj.push(arr.amount); 
    let num1 = (arr.unitPrice * 0.01);
    obj.push(num1.toFixed(2) + ' Eur');
    let num2 = (num1 * arr.amount);
    obj.push(num2.toFixed(2) + ' Eur'); 

    let objL = [...obj].sort((a, b) => b.toString().length - a.toString().length);
    objL = objL[0].length;

    const list = ['ID', 'Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti']
    let listL = [...list].sort((a, b) => b.length - a.length);
    listL = listL[0].length;

    const line = '-'.repeat(objL + listL + 3);

    console.log(line);
    console.log('Prekės informacija');
    console.log(line);
    
    for (let i = 0; i < 5; i++) {
        let l1 = ``;
        let l2 = ``;
        l1 = (`${list[i]} ${' '.repeat(listL - list[i].length)}|`);
        l2 = (`${obj[i]}`);
        console.log(l1, l2);
    }
    return line;
}




