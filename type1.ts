// Define a tuple called studentProfile that holds:
// A student name (string)
// Age (number)
// IsGraduated (boolean)
import * as string_decoder from "node:string_decoder";


let studentProfile: [string, number, boolean] = ["demeke", 20, true]
console.log(studentProfile[0])


// Define an enum StudentStatus with values: Active, Graduated, DroppedOut.
 enum studentStatus{
    Active = "ACTIVE",
     Graduated = "GRADUATED",
         Droppedout = "DROPPENDOUT"

 }
 let ss:studentStatus = studentStatus.Active;
console.log(ss);
//     Create an array students that holds at least 3 student names.

let students: Array<string> = ["demeke", "derege", "aweke"];

console.log(students);
//     Pick one student and assign them a status using the enum.
// Write if statements to:
//     // Log if the student is active
// Log if they graduated
// Log if they dropped out
// Log all variables at the end.
enum studentassign {
    name = "demeke",
    status = studentStatus.Active
}
let active: studentassign = studentassign.status
if (active==="ACTIVE"){
    console.log("Active")
} else if (active === "GRADUATED"){
    console.log("Graduated");
}
else if (active === "DROPPENDOUT"){
    console.log("Droppendout ")
}
