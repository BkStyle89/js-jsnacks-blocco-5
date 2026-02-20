const nums = [2, 8, 4, 7, 12, 87];

//ciclo For

/* let evenNumbers=[] */

/* for(let i = 0; i< nums.length;i++){
    const num = nums[i]
    console.log(num);
    if(num %2==0){
        evenNumbers.push(num)
    }
}
console.log(evenNumbers);
 */

//Filter

const evenNumbers = nums.filter(num =>{
    if(num %2===0){
        return true
    }
    return false
})
console.log(evenNumbers);



// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]