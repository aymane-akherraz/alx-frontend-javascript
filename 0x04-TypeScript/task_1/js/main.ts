interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}


interface printTeacherFunction {
  (ftName: string, ltName: string): string
}

const printTeacher: printTeacherFunction = (ftName, ltName) => {
  return `${ftName[0]}. ${ltName}`
}


interface StudentInterface {
  firstName: string, 
  lastName: string,
  workOnHomework(): string,
  displayName(): string
}

class StudentClass implements StudentInterface {
  constructor (public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName
  }
}
