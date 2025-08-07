//Create an object called student with the following properties and methods:
// Properties:
//     firstName (string)
// lastName (string)
// grades (array of numbers, e.g. [85, 92, 78])
// 🔧 Methods:
//     fullName()
// → Returns the full name of the student (e.g., "John Doe"
// averageGrade()
// → Calculates and returns the average of the grades
// addGrade(grade)
// → Adds a new grade (number) to the grades array

let student = {
FirstName: "demeke",
    LastName: "tefera",
    grades : [90, 78, 92],
fullName(){
    return `"my name  ${this.FirstName}  ${this.LastName}`;
},
    averageGrade(){
    const total =  this.grades.reduce((acc, val) => acc+val, 0);
    return Math.round(total/this.grades.length);
    },
addgrade(grades){
    return this.grades.unshift(grades);
}
}
console.log(student.fullName());
console.log(student.averageGrade());
console.log(student.addgrade(90))
console.log(student.grades);