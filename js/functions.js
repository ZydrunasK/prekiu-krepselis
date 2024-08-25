/**
 * Patikrina ar masyvas yra tinkamo tipo ir nera tuscias.
 * @param {array} arr
 * @returns jei ne masyvas tai grazina error jeigu yra masyvas bet tuscias grazina atitinkama zinute
 */
export function validateArr(arr) {
    if (!Array.isArray(arr)) {
        return 'ERROR: įvestis turi būti masyvas';
    }
    if (arr.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    return false;
}

/**
 * Patikrina objektu tinkamuma masyve.
 * @param {array} arr Masyvas su objektais
 * @param {array} requiredKeys Masyvas su reikiamais objekto raktais
 * @returns klaida pagal tai kas neteisinga objekte arba objekto raktuose
 */
export function validateObjInArr(arr, requiredKeys) {
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
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(arr[i]).length === 0) {
            return `ERROR: Objekte ${i + 1} nėra informacijos`;
        };
    }
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

/**
 * Patikrina objekto, kuris yra masyve, turinio tinkamuma.
 * @param {array} arr Masyvas
 * @returns klaida klaida pagal tai kas neteisinga objekto turinyje
 */
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
    return false;
}

/**
 * Gauta skaiciu pavercia i desimtaini ir prideda galune ' Eur'
 * @param {Number} price Skaicius.
 * @example
 * // returns 1.00 Eur
 * formatPrice(100);
 * @returns Performatuota Skaiciu(kaina)
 */
export function formatPrice(price) {
    return (price * 0.01).toFixed(2) + ' Eur';
}

/**
 * Prie gauto skaiciaus prideda galune 'vnt'
 * @param {Number} amount Skaicius.
 * @example
 * // returns 100 vnt
 * formatAmount(100);
 * @returns Performatuota Skaiciu(kieki)
 */
export function formatAmount(amount) {
    return amount + ' vnt';
}

/**
 * Grazina masyve esanciu objektu(prekiu) kieki su tinkama Lietuviska galune
 * @param {Array} arr Masyvas.
 * @example
 * // Jūsų prekių krepšelyje yra 3 prekės:
 * numOfProducts([{}, {}, {}]);
 * @returns teksta su tinkama Lietuviska galune
 */
export function numOfProducts(arr) {
    const arrEnd1 = arr.length.toString().slice(-1);
    const arrEnd2 = arr.length.toString().slice(-2);
    let arrEnd2only = arr.length.toString();
    arrEnd2only = arrEnd2only[arrEnd2only.length - 2];;

    if (arrEnd1 === '0' || arrEnd2only === '1') {
        return (`Jūsų prekių krepšelyje yra ${arr.length} prekių: \n`);
    }
    if (arrEnd1 === '1' && arrEnd2 !== '11') {
        return (`Jūsų prekių krepšelyje yra ${arr.length} prekė: \n`);
    }
    if (arrEnd1 !== '0' && arrEnd2only !== '1' && arrEnd1 !== '1') {
        return (`Jūsų prekių krepšelyje yra ${arr.length} prekės: \n`);
    }
}

/**
 * Sukonstruoja pilna grazia nuostabia gyva lentele is atskiru daliu surinktu is visokiausiu pasaulio kampeliu
 * @param {string} line linija sudaryta is ko tik norit(1 simbolio ilgio).
 * @param {string} title stupelio pavadinimai.
 * @param {string} table lentele su turiniu(privalo baigtis su \n).
 * @returns Sukonstruota lentele
 */
export function frankestein(line, title, table) {
    return `${line}\n${title}\n${line}\n${table}${line}`;
}
