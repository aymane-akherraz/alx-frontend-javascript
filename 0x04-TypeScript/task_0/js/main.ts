interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 15,
  location: 'USA'
}

const student2: Student = {
  firstName: 'Ahmed',
  lastName: 'taher',
  age: 20,
  location: 'KSA'
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
table.style.border = '1px solid';
table.style.borderCollapse = 'collapse';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
headerFirstName.style.border = '1px solid';
headerRow.appendChild(headerFirstName);

const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerLocation.style.border = '1px solid';
headerRow.appendChild(headerLocation);

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach((e) => {
  const row = document.createElement('tr');
  const column1 = document.createElement('td');
  column1.textContent = e.firstName;
  column1.style.border = '1px solid';
  row.appendChild(column1);

  const column2 = document.createElement('td');
  column2.textContent = e.location;
  column2.style.border = '1px solid';
  row.appendChild(column2);

  tbody.appendChild(row);
})

table.appendChild(tbody);

document.body.appendChild(table);
