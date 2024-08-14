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
    {
        id: 9,
        name: 'asdasdasdasdasdasd',
        amount: 99999999,
        unitPrice: 999999,
    },
];

function shoppingList(arr) {
    if (Array.isArray(arr) === false) {
        return 'ERROR: input must be an array'
    }
    
    if (arr.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }

    
    
    let pav = [];
    let kiek = [];
    let uPrice = [];
    let total = [];
    let eur = ' Eur';
    for (let i = 0; i < arr.length; i++) {          
            pav.push(arr[i].name); 
            kiek.push(arr[i].amount); 
            let num1 = (arr[i].unitPrice * 0.01);
                uPrice.push(num1.toFixed(2));
            let num2 = (uPrice[i] * kiek[i]);
                total.push(num2.toFixed(2)); 
    }
    
    //names array - pav | longest name - pavL
    let pavIlgiai = [...pav].sort((a, b) => b.length - a.length);     
    const pavL = pavIlgiai[0].length            
    
    //amount array - kiek | longest amount - kiekL
    let kiekIlgiai = [...kiek].sort((a, b) => b - a);     
    const kiekL = kiekIlgiai[0].toString().length; 
    
    //unitPrice array - uPrice | longest unitPrice - uPriceL
    let uPriceIlgiai = [...uPrice].sort((a, b) => b - a);
    const uPriceL = (uPriceIlgiai[0].toString().length);
    
    //total price array - total | longest total price - totalL
    let totalIlgiai = ([...total].sort((a, b) => b - a));
    const totalL = totalIlgiai[0].toString().length;
    

    const title = 'Pavadinimas  | Kiekis  | Vieneto Kaina | Viso mokėti';
    const line = '-';
    for (let i = 0; i < arr.length; i++) {

        const title = (`Pavadinimas`);

        let c1 = `${i + 1}. ${pav[i]} ${' '.repeat(pavL - pav[i].length)}|`;
        let c2 = `${kiek[i]} ${' '.repeat(kiekL - kiek[i].toString().length)}|`;
        let c3 = `${uPrice[i]} Eur ${' '.repeat((uPriceL - uPrice[i].toString().length))}|`;
        let c4 = `${total[i]} Eur ${' '.repeat(totalL - total[i].toString().length)}|`; 
        console.log(c1, c2, c3, c4);

        
    }   

    

    return '';

}
console.log(shoppingList(firstShoppingList)); 