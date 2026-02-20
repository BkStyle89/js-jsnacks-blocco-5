const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

let names = []
for(let i=0; i< people.length; i++){
  const person = people[i]
  console.log(person.name);
  names.push(person.name)
  
}
console.log(names.join(" "));

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
