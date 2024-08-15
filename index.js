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
    // pushes each object key into its own array
    for (let i = 0; i < arr.length; i++) {          
            pav.push(arr[i].name); 
            kiek.push(arr[i].amount); 
            let num1 = (arr[i].unitPrice * 0.01);
                uPrice.push(num1.toFixed(2));
            let num2 = (uPrice[i] * kiek[i]);
                total.push(num2.toFixed(2)); 
    }
    
    total = total.map(n => n + ' Eur')
    uPrice = uPrice.map(n => n + ' Eur')
    

    //names array - pav | longest name - pavL
    let pavIlgiai = [...pav].sort((a, b) => b.length - a.length);     
    const pavL = pavIlgiai[0].length            
    
    //amount array - kiek | longest amount - kiekL
    let kiekIlgiai = [...kiek].sort((a, b) => b - a);     
    const kiekL = kiekIlgiai[0].toString().length; 
    
    //unitPrice array - uPrice | longest unitPrice - uPriceL
    let uPriceIlgiai = [...uPrice].sort((a, b) => b.length - a.length);
    const uPriceL = (uPriceIlgiai[0].toString().length);
    
    //total price array - total | longest total price - totalL
    let totalIlgiai = ([...total].sort((a, b) => b.length - a.length));
    const totalL = totalIlgiai[0].length;

    // list number length (1.) and all longest object keys
    const listNum = (arr.length.toString().length) + 2;    
    let allLongs = [pavL, kiekL, uPriceL, totalL];
    
    // make array of longest thingies and add to full title
    const titlesList = ['Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];
    
    
    let fullTitle = ``;
    // makes full title with the right amount of spaces by compraing  title length and longest word in collum.
    for (let i = 0; i < titlesList.length; i++) {
        if (titlesList[i] === titlesList[0]) {
            fullTitle += `| ${titlesList[0]} ${' '.repeat(allLongs[i] - titlesList[0].length + listNum)}`;
        }
        if (i > 0 && i < titlesList.length - 1) {
            if (allLongs[i] >= titlesList[i].length) {
                fullTitle += `| ${titlesList[i]} ${' '.repeat(allLongs[i] - titlesList[i].length)}`;
            } else { 
                fullTitle += `| ${titlesList[i]} `;
            }   
        }
        if (i === titlesList.length - 1) {
            if (allLongs[i] >= titlesList[i].length) {
                fullTitle += `| ${titlesList[i]} ${' '.repeat(allLongs[i] - titlesList[i].length)}|`;
            } else { 
                fullTitle += `| ${titlesList[i]}`;
            }   
        }
    }

    const line = '-';
    
    console.log(line.repeat(fullTitle.length));
    console.log(fullTitle);
    console.log(line.repeat(fullTitle.length));


    for (let i = 0; i < arr.length; i++) {
        if (pavL + listNum > titlesList[0].length) {
            c1 = `| ${i + 1}. ${pav[i]} ${' '.repeat(pavL - pav[i].length)}|`;  
        } else {
            c1 = `| ${i + 1}. ${pav[i]} ${' '.repeat(titlesList[0].length - pav[i].length)}|`;
        }
        if (kiekL > titlesList[1].length) {
            c2 = `${kiek[i]} ${' '.repeat(kiekL - kiek[i].toString().length)}|`;
        } else {
            c2 = `${kiek[i]} ${' '.repeat(titlesList[1].length - kiek[i].toString().length)}|`;
        }
        if (uPriceL > titlesList[2].length) {
            c3 = `${uPrice[i]} ${' '.repeat((uPriceL - uPrice[i].toString().length))}|`;
        } else {
            c3 = `${uPrice[i]} ${' '.repeat((titlesList[2].length - uPrice[i].toString().length))}|`;
        }
        if (totalL > titlesList[3].length) {
            c4 = `${total[i]} ${' '.repeat(totalL - total[i].toString().length)}|`;
        } else {
            c4 = `${total[i]} ${' '.repeat(titlesList[3].length - total[i].toString().length)}|`;
        }

        console.log(c1, c2, c3, c4);
        
    }   
   return line.repeat(fullTitle.length);
}
console.log(shoppingList(firstShoppingList)); 