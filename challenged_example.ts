// Concepts Covered: Array methods, functions, arrow functions, rest parameters, callback
// Challenge:
//     Create a function to take multiple student scores using rest parameters.
//     Calculate average.
//     Use isPassed (callback) to determine if passed.
//     Return report like:

function studentScore(...score: number[]): number{
    let total:number = score.reduce((acc, val)=>acc+val, 0);
  return Math.round(total/score.length);
}

function ispassed(average:number, averca:(avg:number)=>number):any {
 let Average = console.log("average "+averca(average));
 let Message  = (averca(average) <= 50) ? console.log("you are passed"):"error is happen";

    let result:[any, any] = [Average, Message]
 return result

}
 ispassed(studentScore(50,56,90), n=>n)


///challenged function

function showSummary(
    studentName: string,
    ...scores: number[]
): string;

function showSummary(studentName: string, ...scores: number[]): string;
function showSummary(
    studentName: string,
    school: string,
    callback: (name: string, avg: number) => void,
    ...scores: number[]
): string;

function showSummary(
    studentName: string,
    arg2: any,
    arg3?: any,
    ...rest: number[]
): string {
    let scores: number[];
    let callback: ((name: string, avg: number) => void) | null = null;

    if (typeof arg2 === "string" && typeof arg3 === "function") {
        // Overload 2
        scores = rest;
        callback = arg3;
    } else {
        // Overload 1
        scores = [arg2, arg3, ...rest].filter(n => typeof n === 'number') as number[];
    }

    const sum = scores.reduce((acc, val) => acc + val, 0);
    const avg = Math.round(sum / scores.length);

    if (callback) {
        callback(studentName, avg);
        return "Callback executed.";
    }

    return `${studentName}'s average score is ${avg}`;
}
// Call 1: Simple summary
console.log(showSummary("Alem", 89, 76, 91));
// Alem's average score is 85

// Call 2: With school and callback
showSummary("Sami", "Unity School", (name, avg) => {
    console.log(`${name}'s average score is ${avg}`);
}, 90, 80, 100);
//  Sami's average score is 90
