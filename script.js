// Student Object
const student = {
    name: "Joe Walter",
    age: 48,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
};
console.log(student.displayInfo());
