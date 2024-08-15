export function shoppingList(arr) {
    if (Array.isArray(arr) === false) {
        return 'ERROR: input must be an array'
    }
    
    if (arr.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    
    // these need to be made into ends with instead of range of numbers
/*     if (arr.length >= 10 && arr.length <= 20) {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekių:`);   
    } else if (arr.length > 1 && arr.length < 10){
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekės:`);   
    } else if (arr.length = 1){
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekė:`);   
    } */
    
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
    const listNum = (arr.length.toString().length);    // length of longest list number
    const listNumFull = (arr.length.toString().length) + 2;    // +2 accounts for the dot and space after the number
    let allLongs = [pavL, kiekL, uPriceL, totalL];
    
    // make array of longest thingies and add to full title
    const titlesList = ['Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];
    
    
    let fullTitle = ``;
    // makes full title with the right amount of spaces by compraing  title length and longest word in collum.
    for (let i = 0; i < titlesList.length; i++) {
        if (titlesList[i] === titlesList[0]) {
            fullTitle += `| ${titlesList[0]} ${' '.repeat(allLongs[i] - titlesList[0].length + listNumFull)}`;
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

    for (let i = 0; i < arr.length; ++i) {
        let c1 = ``;
        let c2 = ``;
        let c3 = ``;
        let c4 = ``;
        pav[i] = `${i + 1}. ${pav[i]}`;
        if (pavL + listNumFull > titlesList[0].length) {
            c1 = `| ${pav[i]} ${' '.repeat((pavL + listNumFull) - (pav[i].length))}|`;  
        } else {
            c1 = `| ${pav[i]} ${' '.repeat(titlesList[0].length - pav[i].length)}|`;
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

// 1 - preke
// 2 - prekes
// 3 - prekes
// 4 - prekes
// 5 - prekes
// 6 - prekes
// 7 - prekes
// 8 - prekes
// 9 - prekes
// 10 - prekiu
// 11 - prekiu
// 12 - prekiu
// 13 - prekiu
// 14 - prekiu
// 15 - prekiu
// 16 - prekiu
// 17 - prekiu
// 18 - prekiu
// 19 - prekiu
// 20 - prekiu
// 21 - preke
// 22 - prekes
// 23 - prekes
// 30 - prekiu
// 31 - preke
// 32 - prekes

// 1 || ends with 1 - preke
// 2-9 || ends with 2-9 prekes
// 10-20 || end with 0 || ends with 10-20 - prekiu
