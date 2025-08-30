function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let c = contador();
console.log(c());
console.log(c());
persons =[{'name': 'Yoe', 'age': 41}, {'name': 'Dunia', 'age': 45}, {'name': 'Sofi', 'age': 19}]

let mayores = persons => {
    let person_age = []
    for (let i = 0; i < persons.length; i++) {
        debugger;
        if (persons[i].age > 18){
            person_age.push(persons[i])
        }
    }
    return person_age
}
console.log(mayores(persons).sort((a, b)=>a.age - b.age))

const max_age = persons => persons.filter(person=>person.age>18).sort((a,b)=> a.age - b.age)
console.log(max_age(persons))
