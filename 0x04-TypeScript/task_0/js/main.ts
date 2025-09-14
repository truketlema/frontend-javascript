interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Truket",
  lastName: "Lema",
  age: 21,
  location: "Adama",
};
const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Addis Ababa",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.border = "1";

const header = table.insertRow();
const th1 = document.createElement("th");
th1.innerText = "First Name";
const th2 = document.createElement("th");
th2.innerText = "Location";
header.appendChild(th1);
header.appendChild(th2);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.innerText = student.firstName;
  const cell2 = row.insertCell();
  cell2.innerText = student.location;
});

document.body.appendChild(table);
