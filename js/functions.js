
export function validateArr(arr) {
    if (!Array.isArray(arr)) {
        return 'ERROR: įvestis turi būti masyvas';
    }
    if (arr.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return `ERROR: objektas ${i + 1} negali būti masyvas`;
        };
    }
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(arr[i]).length === 0) {
            return `ERROR: Objekte ${i + 1} nėra informacijos`;
        };
    }
    return false;
}

export function validateObjInArr(arr, requiredKeys) {
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(arr[i]).length !== requiredKeys.length) {
        return `ERROR: Neteisingi raktai objekte ${i + 1}`;
        }
        for (const key in arr[i]) {
            if (!requiredKeys.includes(key)) {
                return `ERROR: Neteisingi raktai objekte ${i + 1}`;
            }
        }
    }
    return false;
}

export function validateObjContentInArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isSafeInteger(arr[i].id) || arr[i].id < 0) {
            return `ERROR: id reikšmė neteisinga objekte ${i + 1}`;
        }
        if (typeof arr[i].name !== 'string') {
            return `ERROR: pavadinimas objekte ${i + 1} turi būti teksto tipo`;
        }
        if (!Number.isSafeInteger(arr[i].amount) || arr[i].amount < 0) {
            return `ERROR: Objekto ${i + 1} įvestas amount turi būti sveikasis teigiamas skaičius`;
        }
        if (!Number.isSafeInteger(arr[i].unitPrice) || arr[i].unitPrice < 0) {
            return `ERROR: unitPrice įvestis objekte ${i + 1} turi būti sveikasis teigiamas skaičius`;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return `ERROR: objektas ${i + 1} negali būti masyvas`;
        }
        if (typeof arr[i] === 'number') {
            return `ERROR: objektas ${i + 1} negali būti skaičiaus tipo`;
        }
        if (typeof arr[i] === 'string') {
            return `ERROR: objektas ${i + 1} negali būti teksto tipo`;
        }
    }
    return false;
}

export function formatPrice(price) {
    return (price * 0.01).toFixed(2) + ' Eur';
}

export function formatAmount(amount) {
    return amount + ' vnt';
}

export function numOfProducts(arr) {
    const arrEnd1 = arr.length.toString().slice(-1);
    const arrEnd2 = arr.length.toString().slice(-2);
    let arrEnd2only = arr.length.toString();
    arrEnd2only = arrEnd2only[arrEnd2only.length - 2];;

    if (arrEnd1 === '0' || arrEnd2only === '1') {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekių`);
    }
    if (arrEnd1 === '1' && arrEnd2 !== '11') {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekė`);
    }
    if (arrEnd1 !== '0' && arrEnd2only !== '1' && arrEnd1 !== '1') {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekės`);
    }
}

export function frankestein(line, title, table) {
    return `${line}\n${title}\n${line}\n${table}${line}`;
}


