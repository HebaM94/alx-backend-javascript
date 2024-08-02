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
    location: 'London'
}
const studentTwo: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Manchester'
}
const studentsList: Student[] = [studentOne, studentTwo];

const table = document.createElement('table');
table.style.border = '1px solid black';

const tableHeader = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');
firstNameHeader.textContent = 'Name';
locationHeader.textContent = 'Location';
firstNameHeader.style.border = '1px solid black';
locationHeader.style.border = '1px solid black';
tableHeader.append(firstNameHeader, locationHeader);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');
    firstName.textContent = student.firstName;
    location.textContent = student.location;
    row.style.border = '1px solid black';
    firstName.style.border = '1px solid black';
    location.style.border = '1px solid black';
    row.append(firstName, location);
    table.append(row);
});

document.body.appendChild(table);
