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

const emptyList = [];

function shoppingList(arr) {
    if (Array.isArray(arr) === false) {
        return 'ERROR: input must be an array'
    }
    
    if (arr.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }

    if (arr.length === 1) {
        console.log('-------------------------------------------------------');
    console.log('Pavadinimas  | Kiekis  | Vieneto Kaina | Viso mokėti');
    console.log('-------------------------------------------------------');
    console.log(`${0 + 1}. ${arr[0].name}      | ${arr[0].amount}      | ${arr[0].unitPrice * 0.01} Eur      | ${(arr[0].amount * arr[0].unitPrice * 0.01).toFixed(2)} Eur`);  
    return  '-------------------------------------------------------';   
    }

    console.log('-------------------------------------------------------');
    console.log('Pavadinimas  | Kiekis  | Vieneto Kaina | Viso mokėti');
    console.log('-------------------------------------------------------');
    console.log(`${0 + 1}. ${arr[0].name} | ${arr[0].amount} | ${arr[0].unitPrice * 0.01} Eur      | ${(arr[0].amount * arr[0].unitPrice * 0.01).toFixed(2)} Eur`);  
    console.log(`${1 + 1}. ${arr[1].name}   | ${arr[1].amount}       | ${arr[1].unitPrice * 0.01} Eur       | ${(arr[1].amount * arr[1].unitPrice * 0.01).toFixed(2)} Eur`);  
    console.log(`${2 + 1}. ${arr[2].name}  | ${arr[2].amount}       | ${arr[2].unitPrice * 0.01} Eur      | ${(arr[2].amount * arr[2].unitPrice * 0.01).toFixed(2)} Eur`);  
    return  '-------------------------------------------------------';

}
console.log(shoppingList(emptyList));
console.log(shoppingList(firstShoppingList));
console.log(shoppingList(singleProductShoppingList));






