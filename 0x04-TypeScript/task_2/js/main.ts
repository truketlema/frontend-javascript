// Assuming your employee factory
interface Director {
  name: string;
  salary: number;
  director: true;
}

interface Teacher {
  name: string;
  salary: number;
  director?: false;
}

type Employee = Director | Teacher;

function createEmployee(salary: number): Employee {
  if (salary >= 1000) {
    return { name: "Director", salary, director: true };
  } else {
    return { name: "Teacher", salary };
  }
}

// Functions representing tasks
function workDirectorTasks(): void {
  console.log("Getting to director tasks");
}

function workTeacherTasks(): void {
  console.log("Getting to work");
}

// Type predicate for Director
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).director === true;
}

// Execute work based on type
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

// Test cases
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
