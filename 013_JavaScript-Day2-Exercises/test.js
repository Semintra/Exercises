averageGrade = function(Grade_Math, Grade_Physics, Grade_English) {
    let sum = Grade_Math + Grade_Physics + Grade_English;
    let average = sum / 3;
    console.log(`Sum: ${sum} \nAverage: ${average}`)
}

averageGrade(3,4,5)