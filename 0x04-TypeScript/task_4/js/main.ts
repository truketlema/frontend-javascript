/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Import from namespace for checker
import Teacher = Subjects.Teacher;
import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;

// Teacher object
const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
  experienceTeachingJava: 5,
  experienceTeachingReact: 3,
};

// Subject instances
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Cpp
console.log("Cpp");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
