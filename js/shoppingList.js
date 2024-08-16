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
    
    const objKeys = [ 'id', 'name', 'amount', 'unitPrice' ];

    for (let i = 0; i < arr.length; i++) {
        if ((Object.keys(arr[i])[0]) !== objKeys[0]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
        if ((Object.keys(arr[i])[1]) !== objKeys[1]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
        if ((Object.keys(arr[i])[2]) !== objKeys[2]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
        if ((Object.keys(arr[i])[3]) !== objKeys[3]) {
            return `ERROR: Neteisingi raktai objekte ${i + 1}`
        };
    }
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
        if (!Number.isSafeInteger(arr[i].unitPrice) || arr[i].unit < 0) {
            return `ERROR: unit price įvestis objekte ${i + 1} turi būti sveikasis teigiamas skaičius`
        };
    }

    const arrEnd1 = arr.length.toString().slice(-1);
    const arrEnd2 = arr.length.toString().slice(-2);
    let arrEnd2only = arr.length.toString();
    arrEnd2only = arrEnd2only[arrEnd2only.length - 2];;
    
    if (arrEnd1 === '0' || arrEnd2only === '1') {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekių:`);   
    }
    if (arrEnd1 === '1' && arrEnd2 !== '11') {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekė:`);   
    }
    if (arrEnd1 !== '0' && arrEnd2only !== '1' && arrEnd1 !== '1') {
        console.log(`Jūsų prekių krepšelyje yra ${arr.length} prekės:`);  
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

    // list number length(1.) and all longest object keys
    const listNumFull = (arr.length.toString().length) + 2;    // +2 accounts for the dot and space after the number
    let allLongs = [pavL, kiekL, uPriceL, totalL];
    
    const titlesList = ['Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti'];
    
    let fullTitle = ``;
    // makes full title with the right amount of spaces by compraing  title length and longest word in collum.
    for (let i = 0; i < titlesList.length; i++) {
        if (titlesList[i] === titlesList[0]) {
            if (allLongs[i] + listNumFull >= titlesList[i].length) {
                fullTitle += `${titlesList[0]} ${' '.repeat(allLongs[i] - titlesList[0].length + listNumFull)}`
            } else { 
                fullTitle += `${titlesList[i]} `;
            } 
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
                fullTitle += `| ${titlesList[i]}${' '.repeat(allLongs[i] - titlesList[i].length)}`;     // there has to be no gap between space repeat and text or else its gonna be too long
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
            c1 = `${pav[i]} ${' '.repeat((pavL + listNumFull) - (pav[i].length))}|`;  
        } else {
            c1 = `${pav[i]} ${' '.repeat(titlesList[0].length - pav[i].length)}|`;
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
            c4 = `${total[i]} ${' '.repeat(totalL - total[i].toString().length)}`;
        } else {
            c4 = `${total[i]} ${' '.repeat(titlesList[3].length - total[i].toString().length)}`;
        }
        console.log(c1, c2, c3, c4);      
    }   
   return line.repeat(fullTitle.length);
}



