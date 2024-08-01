interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'California'
}
const studentTwo: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
}
const students: Student[] = [studentOne, studentTwo];


