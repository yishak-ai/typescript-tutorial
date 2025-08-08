// Create a Student class:
// Properties: name, grades: number[]
// Methods:
//     addGrade(grade: number): adds a grade
// getAverage(): returns the average grade
// isPassed(): returns true if average ≥ 60
// Create a subclass CollegeStudent with:
// Extra property: major
// Override isPassed() so passing mark is 70

class Student {
    public name: string;
    public  grades:number[];
    constructor(name:string, grades:number[]) {
        this.name = name;
        this.grades = grades;
        console.log(`Student created: ${this.name}- Grades: ${this.grades.join(",")}`)
    }
     addGrade(grade: number){
      this.grades.push(grade);

   }
   getAverage(...grades:number[] ):number{
      const total = grades.reduce((acc, grade) => acc + grade, 0);
      return total / grades.length;
   }
   isPassed(collback:(average:number)=> boolean){
      const average = this.getAverage(...this.grades);
      return collback(average);

   }
}
const student = new Student("demeke", [67, 78, 90] );

student.addGrade(89);
console.log(student.getAverage(...student.grades));
console.log(student.isPassed((average) => average >= 60));

class CollageStudent extends Student{
    public major: string;
    constructor(name: string, grades: number[], major: string){
         super(name, grades);
         this.major = major;
         console.log(`College Student created: ${this.name} - Major: ${this.major} - Grades: ${this.grades.join(",")}`);
         
    }
    isPassed(collback: (average: number) => boolean): boolean {
         const average = this.getAverage(...this.grades);
         return collback(average);
    }
}
const collegeStudent = new CollageStudent("John", [75, 85, 90], "Computer Science");
console.log(collegeStudent.getAverage(...collegeStudent.grades));
console.log(collegeStudent.isPassed((average) => average >= 70));


