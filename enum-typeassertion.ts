// student information by using enum

// object declaration

enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}

enum Status {
    Active = "active",
    Graduated = "graduated",
    Dropped = "dropped"
}

type Student = {
    readonly id: number;
    name: string;
    gender: Gender;
    grades: number[];
    status: Status;
    email?: string;
    location: [string, number]; // [city, zone]
};

let Students: Student[] = [
    {
        id: 1,
        name: "demeke",
        gender: Gender.Male,
        grades: [80, 90, 89],
        status: Status.Active,
        location: ["bahir dar", 13]
    },
    {
        id: 2,
        name: "derege",
        gender: Gender.Other,
        grades: [79, 89, 87],
        status: Status.Graduated,
        email: "derege3@gmail.com",
        location: ["bahir dar", 13]
    },
    {
        id: 3,
        name: "hana",
        gender: Gender.Female,
        grades: [30, 50, 60],
        status: Status.Dropped,
        location: ["bahir dar", 13]
    }

];

// for get calculate grade
function getGrades(grades: number[]): number {
    const grade = grades.reduce((acc, val) => acc + val, 0)
    return Math.round(grade / grades.length)
}

Students.forEach(student => {

    /////////////////////// Student Information ///////////////////////
    console.log("ID: " + student.id)
    console.log("Name: " + student.name);
    console.log("Gender: " + student.gender);
    console.log("Grades: " + getGrades(student.grades));



    if (student.status === "active") {
        console.log("Student status is " + student.status);
    } else if (student.status === "dropped") {
        console.log("Student status is " + student.status);
    } else if (student.status === "graduated") {
        console.log("Student graduated is " + student.grades);
    } else {
        console.log("Student student is not inserted error...");
    }
    console.log(
        "Email: " + student.email
    );
    console.log("City: " + student.location[0] + ' - ' + 'kebele: ' + student.location[1]);
})


//Write a function that accepts a parameter with type any, and uses
// type assertion to treat it as a string, returning its length.

function VerficationCode(code: any): any {

    return console.log("the lengh of code: " + (code as string).length);
}

VerficationCode('sgd123')