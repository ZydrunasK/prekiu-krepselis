const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];

const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];





function productDetails(arr, num) {
    if (Number.isInteger(num) === false) {
        return 'ERROR: second input must be a natural number'
    }
    if (Array.isArray(arr) === false) {
        return 'ERROR: first input must be an array';
    }

    arr = arr.filter(n => n.id === num);
    arr = arr[0];

    if (arr === undefined) {
        return `Prekė, su ID: ${num} neegzistuoja.`
    }

    unitPr = arr.unitPrice * 0.01;
    visoMok = (arr.amount * unitPr).toFixed(2);

    const ids = `ID`;


// vienu zodziu bandyk taip - susidedi visus atskirus pavadinimus, padarai array is anu ir isfiltruoji ilgiausia
// tada pagal ilgiausia sudedi tarpus (copium)



    console.log('------------------------------');
    console.log('Prekės informacija');
    console.log('------------------------------');
    console.log(`ID            | ${arr.id}`);
    console.log(`Pavadinimas   | ${arr.name}`);
    console.log(`Kiekis        | ${arr.amount}`);
    console.log(`Vieneto Kaina | ${unitPr} Eur`);
    console.log(`Viso mokėti   | ${visoMok} Eur`);
    return '------------------------------';
}


console.log(productDetails(singleProductShoppingList, 2));




