/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Cpp.ts" />

// Create a Teacher object
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
  experienceTeachingJava: 5,
  experienceTeachingReact: 3,
};

// Create subject instances
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// C++ subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
