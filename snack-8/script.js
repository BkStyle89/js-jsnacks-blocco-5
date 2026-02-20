const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//ciclo Fore
/* 
const classeStudente=[]
for(let i=0;i< students.length;i++){
  const student=students[i]
  console.log(student);
  if(student.id==1){
    classeStudente.push(student.class)
  }
}
console.log(classeStudente);
 */

let result =[]
const studentClass =students.map((student)=>{
  return `${student.class}`
  
})
/* console.log(studentClass[0]); */
result.push(studentClass[0])
console.log(result);

