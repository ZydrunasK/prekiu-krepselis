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


