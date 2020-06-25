const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75,
        finalExam: 90
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65,
        finalExam: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95,
        finalExam: 99
    },
    {
        name: "Alvaro Briattore",
        firstProject: 82,
        secondProject: 92,
        finalExam: 70
    },
    {
        name: "Isabel Ortega",
        firstProject: 90,
        secondProject: 32,
        finalExam: 85
    },
    {
        name: "Francisco Martinez",
        firstProject: 90,
        secondProject: 55,
        finalExam: 78
    },
    {
        name: "Jorge Carrillo",
        firstProject: 83,
        secondProject: 77,
        finalExam: 90
    },
    {
        name: "Miguel López",
        firstProject: 80,
        secondProject: 75,
        finalExam: 75
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72,
        finalExam: 67
    },
    {
        name: "Ruben Pardo",
        firstProject: 89,
        secondProject: 72,
        finalExam: 65
    }
]


const finalGrades = students.map(theStudent => {
    const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
    const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
    return {
        name: theStudent.name,
        finalGrade: Math.round(finalGrade)
    }
})


console.log(finalGrades);
// [
//   { name: 'Tony Parker', finalGrade: 85 },
//   { name: 'Marc Barchini', finalGrade: 69 },
//   { name: 'Claudia Lopez', finalGrade: 87 },
//   { name: 'Alvaro Briattore', finalGrade: 77 },
//   { name: 'Isabel Ortega', finalGrade: 75 },
//   { name: 'Francisco Martinez', finalGrade: 76 },
//   { name: 'Jorge Carrillo', finalGrade: 86 },
//   { name: 'Miguel López', finalGrade: 76 },
//   { name: 'Carolina Perez', finalGrade: 72 },
//   { name: 'Ruben Pardo', finalGrade: 71 } 
//  ]
