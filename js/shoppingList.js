import * as f from "./functions.js";

export function shoppingList(arr) {
    if (!Array.isArray(arr)) {
        return 'ERROR: įvestis turi būti masyvas'
    }
    if (arr.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return `ERROR: objektas ${i + 1} negali būti masyvas`
        };
    }
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(arr[i]).length === 0) {
            return `ERROR: Objekte ${i + 1} nėra informacijos`
        };
    }
    
    const requiredKeys = [ 'id', 'name', 'amount', 'unitPrice' ];
    f.validateObjInArr(arr, requiredKeys);

    for (let i = 0; i < arr.length; i++) {
        if (!Number.isSafeInteger(arr[i].id) || arr[i].id < 0) {
            return `ERROR: id reikšmė neteisinga objekte ${i + 1}`
        };
        if (typeof arr[i].name !== 'string') {
            return `ERROR: pavadinimas objekte ${i + 1} turi būti string tipo`
        };
        if (!Number.isSafeInteger(arr[i].amount) || arr[i].amount < 0) {
            return `ERROR: Objekto ${i + 1} įvestas amount turi būti sveikasis teigiamas skaičius`
        };
        if (!Number.isSafeInteger(arr[i].unitPrice) || arr[i].unitPrice < 0) {
            return `ERROR: unit price įvestis objekte ${i + 1} turi būti sveikasis teigiamas skaičius`
        };
    }

    const pav = [];
    const kiek = [];
    const uPrice = [];
    const total = [];
    const titlesList = ['Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];

    for (let i = 0; i < arr.length; i++) {          
            pav.push(arr[i].name); 
            kiek.push(arr[i].amount); 
            uPrice.push(f.formatPrice(arr[i].unitPrice));
            total.push(f.formatPrice(arr[i].unitPrice * arr[i].amount));
    }
    
    //names array - pav | ilgiausias name - pavL |
    const listNumFull = (arr.length.toString().length) + 2;    // +2 del tasko ir tarpo ('1. ') po skaiciaus     
    const pavIlgiai = [...pav].sort((a, b) => b.length - a.length);     
    const pavL = pavIlgiai[0].length + listNumFull;             
 
    

    //amount array - kiek | ilgiausias amount - kiekL
    const kiekIlgiai = [...kiek].sort((a, b) => b - a);     
    const kiekL = kiekIlgiai[0].toString().length; 
    
    //unitPrice array - uPrice | ilgiausias unitPrice - uPriceL
    const uPriceIlgiai = [...uPrice].sort((a, b) => b.length - a.length);
    const uPriceL = (uPriceIlgiai[0].length);
    
    //total price array - total | ilgiausias total price - totalL
    const totalIlgiai = ([...total].sort((a, b) => b.length - a.length));
    const totalL = totalIlgiai[0].length;

    // list number length(1. ) and all ilgiausias object keys
    const longestObjKeys = [pavL, kiekL, uPriceL, totalL];
    
    
    let fullTitle = '';
    for (let i = 0; i < titlesList.length; i++) {
        if (titlesList[i] === titlesList[0]) {
            if (longestObjKeys[i] >= titlesList[i].length) {
                fullTitle += `${titlesList[0]} ${' '.repeat(longestObjKeys[i] - titlesList[0].length)}`
            } else { 
                fullTitle += `${titlesList[i]} `;
            } 
        }
        if (i > 0 && i < titlesList.length - 1) {
            if (longestObjKeys[i] >= titlesList[i].length) {
                fullTitle += `| ${titlesList[i]} ${' '.repeat(longestObjKeys[i] - titlesList[i].length)}`;
            } else { 
                fullTitle += `| ${titlesList[i]} `;
            }   
        }
        if (i === titlesList.length - 1) {
            if (longestObjKeys[i] >= titlesList[i].length) {
                fullTitle += `| ${titlesList[i]}${' '.repeat(longestObjKeys[i] - titlesList[i].length)}`;     // neturi buti tarpo tarp teksto ir repeat kitaip gausis per ilgas
            } else { 
                fullTitle += `| ${titlesList[i]}`;
            }   
        }
    }

    let table = '';
    for (let i = 0; i < arr.length; ++i) {
        pav[i] = `${i + 1}. ${pav[i]}`;
        if (pavL > titlesList[0].length) {
            table += `${pav[i]} ${' '.repeat(pavL - (pav[i].length))}| `;  
        } else {
            table += `${pav[i]} ${' '.repeat(titlesList[0].length - pav[i].length)}| `;
        }
        if (kiekL > titlesList[1].length) {
            table += `${kiek[i]} ${' '.repeat(kiekL - kiek[i].toString().length)}| `;
        } else {
            table += `${kiek[i]} ${' '.repeat(titlesList[1].length - kiek[i].toString().length)}| `;
        }
        if (uPriceL > titlesList[2].length) {
            table += `${uPrice[i]} ${' '.repeat((uPriceL - uPrice[i].toString().length))}| `;
        } else {
            table += `${uPrice[i]} ${' '.repeat((titlesList[2].length - uPrice[i].toString().length))}| `;
        }
        if (totalL > titlesList[3].length) {
            table += `${total[i]} ${' '.repeat(totalL - total[i].toString().length)}\n`;
        } else {
            table += `${total[i]} ${' '.repeat(titlesList[3].length - total[i].toString().length)}\n`;
        }   
    } 
    
    const line = '-'.repeat(fullTitle.length);  
    return f.frankestein(line, fullTitle, table);

}



