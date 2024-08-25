import * as f from "./functions.js";

export function shoppingList(arr) {

    const arrError = f.validateArr(arr);    
    if (arrError !== false) {
        return arrError;
    }

    const requiredKeys = [ 'id', 'name', 'amount', 'unitPrice' ];
    const objInArrError = f.validateObjInArr(arr, requiredKeys);    
    if (objInArrError !== false) {
        return objInArrError;
    }

    const objContInArrError = f.validateObjContentInArray(arr);;    
    if (objContInArrError !== false) {
        return objContInArrError ;
    }
    
    const pav = [];
    const kiek = [];
    const uPrice = [];
    const total = [];
    const titlesList = ['Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];

    for (let i = 0; i < arr.length; i++) {          
            pav.push((i + 1) + '. ' + arr[i].name); 
            kiek.push(f.formatAmount(arr[i].amount)); 
            uPrice.push(f.formatPrice(arr[i].unitPrice));
            total.push(f.formatPrice(arr[i].unitPrice * arr[i].amount));
    }

    const pavIlgiai = [...pav, titlesList[0]].sort((a, b) => b.length - a.length);  
    const pavL = pavIlgiai[0].length             

    const kiekIlgiai = [...kiek, titlesList[1]].sort((a, b) => b.length - a.length);     
    const kiekL = kiekIlgiai[0].toString().length

    const uPriceIlgiai = [...uPrice, titlesList[2]].sort((a, b) => b.length - a.length);
    const uPriceL = uPriceIlgiai[0].length
    
    const totalIlgiai = ([...total, titlesList[3]].sort((a, b) => b.length - a.length));
    const totalL = totalIlgiai[0].length
     
    const longestObjKeys = [pavL, kiekL, uPriceL, totalL];

    let fullTitle = '';
    for (let i = 0; i < titlesList.length; i++) {
        if (i < titlesList.length - 1) {
            fullTitle += `${titlesList[i]} ${' '.repeat(longestObjKeys[i] - titlesList[i].length)}| `;      
        } else {
            fullTitle += `${titlesList[i]}${' '.repeat(longestObjKeys[i] - titlesList[i].length)}`; // nedeti tarpo tarp text ir repeat kitaip gausis per ilgas
        }
    }
    
    let table = '';
    for (let i = 0; i < arr.length; ++i) {
        table += `${pav[i]} ${' '.repeat(pavL - (pav[i].length))}| `; 
        table += `${kiek[i]} ${' '.repeat(kiekL - kiek[i].length)}| `;
        table += `${uPrice[i]} ${' '.repeat((uPriceL - uPrice[i].length))}| `;
        table += `${total[i]} ${' '.repeat(totalL - total[i].length)}\n`;
    } 
    
    const line = '-'.repeat(fullTitle.length);  
    return f.numOfProducts(arr) + f.frankestein(line, fullTitle, table);
}



