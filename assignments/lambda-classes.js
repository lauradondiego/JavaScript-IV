// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.subject = attributes.subject;
        this.student = attributes.student
    }
speak() {
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}`);
    }
}

// const drake = new Person({
//     name: 'drake',
//     location: 'Toronto',
//     age: 33,
//   });

// drake.speak();



class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
    this.subject = instructorAttributes.subject;
    this.student = instructorAttributes.student;
    }
    demo(subject){
       console.log(`Today we are learning about ${this.subject}`);
        console.log(`${this.student}, receives a perfect score on ${this.subject}`)
    }
}
const instructor = new Instructor({
    subject: 'JavaScript',
    student: 'Laura',
    name: 'Drake',
    location: 'Toronto',
    age: 33,
    // catchPhrase: `Don't forget the homies`,
});

// const dan = new Instructor({
//     // food: 'pizza',
//     // music: 'techno',
//     subject: 'JS',
//     student: 'FW',
//     name: 'Dan',
//     location: 'Toronto',
//     age: 20,
// });


class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.subject = studentAttributes.subject;
    this.student = studentAttributes.student;
    }
    report(submitPr){
        console.log(`${this.student}, has submitted a PR for ${this.subject}`);
         console.log(`${this.student}, has begun sprint challenge on ${this.subject}`);
     }
}

const student = new Student({
    subject: 'JavaScript',
    student: 'Laura',
    name: 'Drake',
    location: 'Toronto',
    age: 33,
    previousBackground: 'Cat walker',
    className: 'Web21',
    favSubjects: "['HTML', 'CSS', 'JavaScript']"
});



// class ProjectManager extends Instructor {
//     constructor(ProjectManagerAttributes){
//         super(ProjectManagerAttributes);
//     this.previousBackground = ProjectManagerAttributes.previousBackground;
//     this.className = ProjectManagerAttributes.className;
//     this.favSubjects = ProjectManagerAttributes.favSubjects;
//     }
//     report(submitPr){
//         console.log(`${this.student}, has submitted a PR for ${this.subject}`);
//          console.log(`${this.student}, has begun sprint challenge on ${this.subject}`)
//      }
// }

const student = new Student({
    subject: 'JavaScript',
    student: 'Laura',
    name: 'Drake',
    location: 'Toronto',
    age: 33,
    previousBackground: 'Cat walker',
    className: 'Web21',
    favSubjects: "['HTML', 'CSS', 'JavaScript']"
});


console.log(student.favSubjects);
console.log(student.report());
console.log(instructor.demo());
// console.log(dan.subject);
instructor.speak();