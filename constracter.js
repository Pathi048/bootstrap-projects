function employee( name, dept, age, experince){
    this.name=name
    this.dept=dept
    this.age=age
    this.experince=experince

}
employee.prototype.section ="II"

const e1 = new employee("pathi", "devolper" , 21,2)
const e2 = new employee("siva","vanavil", 30 , 4)
console.log(e1,e2);
console.log(e1.section);
