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

    // list number length (1.) and all longest object keys
    const listNum = (arr.length.toString().length) + 2;    
    let allLongs = [pavL, kiekL, uPriceL, totalL];
    
    // make array of longest thingies and add to full title
    let fullTitle = ``;
    const titlesList = ['Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];
    for (let i = 0; i < titlesList.length; i++) {
        if (titlesList[i].length < allLongs[i]) {
            fullTitle += (`| ${titlesList[i]} ${' '.repeat((allLongs[i] - titlesList[i].length))}`)  
            continue
        } else {
            fullTitle += (`| ${titlesList[i]}`)
            continue
        }
    }
    const line = '-';

    console.log(allLongs[1]);
    console.log(titlesList[1].length);
    
    console.log(`${line}`);
    console.log(fullTitle);
    console.log(`${line}`);

    for (let i = 0; i < arr.length; i++) {
        console.log(`| ${i + 1}. ${pav[i]} ${' '.repeat(pavL - pav[i].length)}|`,
        `${kiek[i]} ${' '.repeat(kiekL - kiek[i].toString().length)}|`,
        `${uPrice[i]} Eur ${' '.repeat((uPriceL - uPrice[i].toString().length))}|`,
        `${total[i]} Eur ${' '.repeat(totalL - total[i].toString().length)}|`) 
    }   

    
    

    return '';

}
console.log(shoppingList(firstShoppingList)); 