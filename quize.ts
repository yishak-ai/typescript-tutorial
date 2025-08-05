// Write a function that:
// Accepts a value of type string | number | null
// If it's a string, print its length
// If it's a number, double it
// If it's null, print “No value given”

function checks(value:number|string|null){

    if (typeof(value) === "string") {
        console.log(value.length);
    }
    else if (value === null) {
        console.log("no have given");
    }
    else if (typeof(value) === "number") {
        console.log(value.toString());
    }
    else {
        console.log("inserted error");
    }
}
checks(value="");