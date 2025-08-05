// push = = is used to add data
//filter ==  used to spesfic data
//find ==  used to featch data
//map == is used to fach the hole data
//foreach == used to looping data
//length == used to know the data length

//example project
type students = {
    name:string
    age:number
    isStudent : boolean

}
let student:students[] = [];
student.push({
    name:"derege".toUpperCase(),
    age:12,
    isStudent:true

},{
    name:"zedo".toUpperCase(),
    age:12,
    isStudent:true

}, {
    name: "dese".toUpperCase(),
    age: 23,
    isStudent: true
})
student.filter(student=>{
    console.log(student.name);
})
student.map(student=>{
    console.log("student Name"+ student.name+ "student Age " + student.age + " is student " + student.isStudent)
})
student.forEach(student=>{
    console .log(student.name, student.age, student.isStudent);
})
student.find(student=>student.name === "demeke");
console.log("the length of Student is " + student.length);

console.log(student);
// })
// let student:students[] = [
//     {name:"demeke", age: 20, isStudent:true},
//     {name:"darege", age: 23, isStudent:false},
//     {name:"desta", age: 21, isStudent:true}
//
// ]
