/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />


export const cTeacher: Subjects.Teacher = {
  lastName: "Doe",
  firstName: "John",
  experienceTeachingC: 10
}

export const java = new Subjects.Java()
console.log('Java');
java.setTeacher = cTeacher
console.log(java.getRequirements())
console.log(java.getAvailableTeacher());

export const react = new Subjects.React()
console.log('React');
react.setTeacher = cTeacher
console.log(react.getRequirements())
console.log(react.getAvailableTeacher());

export const cpp = new Subjects.Cpp()
console.log('C++');
cpp.setTeacher = cTeacher
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher());

