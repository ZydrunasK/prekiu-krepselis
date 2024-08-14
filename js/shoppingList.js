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
    {
        id: 9,
        name: 'Makaronas',
        amount: 125,
        unitPrice: 1,
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


    let pav = [];
    for (let i = 0; i < arr.length; i++) {          // cycle fills array with names
        pav.push(arr[i].name);                                      
    }
    let pavIlgiai = [...pav].sort((a, b) => b.length - a.length);       // sort  array by name length
    const pavL = pavIlgiai[0].length            // longest name length(is in position 0 because of sort)

    let kiek = [];
for (let i = 0; i < arr.length; i++) {          // cycle fills array with amounts
        kiek.push(arr[i].amount);           
    }
    let kiekIlgiai = [...kiek].sort((a, b) => b.length - a.length);     // sort by length
    const kiekL = kiekIlgiai[0].toString().length;      // turns longest number to string to count length

    let uPrice = [];
    for (let i = 0; i < arr.length; i++) {
        let num = (arr[i].unitPrice * 0.01).toFixed(2);
        uPrice.push(parseFloat(num));  
    }
    let uPriceIlgiai = [...uPrice].sort((a, b) => b.length - a.length);
    const uPriceL = uPriceIlgiai[0].toString().length;




    const title = 'Pavadinimas  | Kiekis  | Vieneto Kaina | Viso mokėti';
    const lines = '-'.repeat(title.length);

    console.log(pavIlgiai);
    console.log(pavL);  
    console.log(kiekIlgiai);  
    console.log(kiekL);  
    console.log(uPriceIlgiai);  
    console.log(uPriceL);  

    return '';

}

console.log(shoppingList(firstShoppingList));
console.log();


// (`${0 + 1}. ${arr[0].name} | ${arr[0].amount} | ${arr[0].unitPrice * 0.01} Eur | ${(arr[0].amount * arr[0].unitPrice * 0.01).toFixed(2)} Eur`)




