

// var gradeScale = function(grade) {
//     if (grade > 89) {
//         console.log("A")
//     } else if (grade < 79 && grade > 90) {
//         console.log("B")
//     } else if (grade > 69 && grade < 80) {
//         console.log("C")
//     } else if (grade > 60 && grade < 70) {
//         console.log("D")
//     } else {
//         console.log("F")
//     }
// }

// gradeScale(79)
// gradeScale(89)



var gradeScale = function(grade){
    console.log("This Is Your Grade:")
    if (grade > 97 && grade < 100) {
        console.log("A+")
    } else if (grade > 93 && grade < 96) {
        console.log("A")
    } else if (grade > 90 && grade < 92) {
        console.log("A-")
    } else if (grade > 87 && grade < 89) {
        console.log("B+")
    } else if (grade > 83 && grade < 86) {
        console.log("B")
    } else if (grade > 80 && grade < 82) {
        console.log("B-")
    } else if (grade > 77 && grade < 79) {
        console.log("C+")
    } else if (grade > 73 && grade < 76) {
        console.log("C")
    } else if (grade > 70 && grade < 72) {
        console.log("C-")
    } else if (grade > 67 && grade < 69) {
        console.log("D+")
    } else if (grade > 63 && grade < 66) {
        console.log("D")
    } else if (grade > 60 && grade < 62) {
        console.log("D-")
    }else{
        console.log("F")
    }
        
        
}

gradeScale(99)
gradeScale(56)
gradeScale(75)