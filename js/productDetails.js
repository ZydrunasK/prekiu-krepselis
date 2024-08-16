export function productDetails(arr, num) {
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

    let obj = [];
    // pushes each object key into its own array   
    obj.push(arr.id)
    obj.push(arr.name); 
    obj.push(arr.amount); 
    let num1 = (arr.unitPrice * 0.01);
    obj.push(num1.toFixed(2) + ' Eur');
    let num2 = (num1 * arr.amount);
    obj.push(num2.toFixed(2) + ' Eur'); 

    let objL = [...obj].sort((a, b) => b.toString().length - a.toString().length);
    objL = objL[0].length;

    const list = ['ID', 'Pavadinimas', 'Kiekis', 'Vieneto kaina', 'Viso mokėti']
    let listL = [...list].sort((a, b) => b.length - a.length);
    listL = listL[0].length;

    

    const line = '-'.repeat(objL + listL + 3);

    
    console.log(line);
    console.log('Prekės informacija');
    console.log(line);
    
    
    for (let i = 0; i < 5; i++) {
        let l1 = ``;
        let l2 = ``;
        l1 = (`${list[i]} ${' '.repeat(listL - list[i].length)}|`);
        l2 = (`${obj[i]}`);
        console.log(l1, l2);
        
        
    }
    return line;
}




