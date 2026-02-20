const numbers = [2, 8, 4, 7, 2, 87];

//for
const oddNumbers =[]
for(let i=0; i<numbers.length;i++){
    const number=numbers[i]
    if(number %2!==0){
        oddNumbers.push(number)
    }
}
console.log(oddNumbers);


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]