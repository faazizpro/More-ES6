const student = {
    name: 'Fahad Abdul Aziz',
    age: 22,
    class: 'ten',
    marks: {
        math: 81,
        accounting: 92,
        finance: 85
    }
}

const marks = student.marks;
const math = student.marks.math;



const accounting = student['marks']['accounting'];
const subject = 'finance';
const subjectMarks = student.marks[subject];
const marks2 = student.marks.accounting;
console.log(marks2);
// console.log(accounting);