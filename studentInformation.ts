
// object declaration
type Student = {
    readonly id: number;
    name: string;
    gender: "male" | "female" | "other";
    grades: number[]; // scores
    status: "active" | "graduated" | "dropped";
    email?: string;
    location: [string, number]; // [city, zone]
};

let Students: Student[] = [
    {id:1, name: "demeke", gender: "male", grades:[80,90,89], status:"active", location:["bahir dar",13] },
    {id:2, name: "derege", gender: "male", grades:[79,89,87], status:"graduated", email: "derege3@gmail.com", location:["bahir dar",13] },
    {id:3, name: "hana", gender: "female", grades:[30,50,60], status:"dropped", location:["bahir dar",13] }

];
