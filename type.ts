// premitive type
let full_name: string = "Demeke Teferra";
let age : number = 20;
let student: boolean =false;

// array challenge
let list_number: number[] = [3,4,7]

//tuble

let address:[string, number]= ['bahir dar', 123]

//enum challenge
enum user  {
   administrator,
    employee,
    admin
}

let admin : user = user.admin
if(admin){
    console.log("this is admin");
}
let administrator: user = user.administrator;
if (administrator){
    console.log('this is administrator ')
}
let employee: user = user.employee;
if (employee){
    console.log('this is administrator ')
}

console.log(full_name);
console.log(age);
console.log(student);

console.log(list_number);
console.log(address);
console.log()