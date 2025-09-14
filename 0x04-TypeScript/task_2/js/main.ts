// Employee types with task methods
interface Director {
  name: string;
  salary: number;
  director: true;
  workDirectorTasks: () => string;
}

interface Teacher {
  name: string;
  salary: number;
  director?: false;
  workTeacherTasks: () => string;
}

type Employee = Director | Teacher;

// Create employee with methods
export function createEmployee(salary: number): Employee {
  if (salary >= 1000) {
    return {
      name: "Director",
      salary,
      director: true,
      workDirectorTasks: () => "Getting to director tasks",
    };
  } else {
    return {
      name: "Teacher",
      salary,
      workTeacherTasks: () => "Getting to work",
    };
  }
}

// Type predicate for Director
export function isDirector(employee: Employee): employee is Director {
  return (employee as Director).director === true;
}

// Execute work based on type and return result
export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test cases
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
