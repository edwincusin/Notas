let grades = [
    { subject: 'Matematicas', grade: 9.5 },
    { subject: 'Lengua', grade: 0 },
    { subject: 'Historia', grade: 9.0 },
    { subject: 'Fisica', grade: 8.5 },
    { subject: 'Quimica', grade: 9.2 },
    { subject: 'Ingles', grade: 8.9 }
];

//FUNCION PARA GUARDAR EN EL ARREGLO
export const saveGrade = (grade) => {
    grades.push(grade);
    console.log("arreglo: ", grades)
};

// FUNCION PARA RETORNAR EL ARREGLO DESDE OTRO ARCHIVO 
export const getGrades = () => {
    return grades;
};

//FUNCIO PARA ACTUALIZAR
export const updateGrade = (nota) => {
    let gradeRetrieved = find(nota.subject);
    if (gradeRetrieved != null) {
        gradeRetrieved.grade = nota.grade;
    }
    console.log("arreglo", grades)
};

//FUNCION PARA BUSCAR 
export const find = (subject) => {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject == subject) {
            return grades[i];
        }

    }
    return null;
};