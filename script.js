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

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Object:", parsedStudent);
const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);
//Add graduationYear and clone student object
const clonedStudent = { ...student, graduationYear: 2024 };
console.log("Cloned Student:", clonedStudent);

// Merge courses
const newCourses = ["Art", "Programming"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);

student.addCourse = function (course) {
    this.courses.push(course);
    console.log(`Course "${course}" added!`);
};

student.totalCourses = function () {
    return this.courses.length;
};

student.addCourse("Physics");
console.log("Total Courses:", student.totalCourses());

const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average Score:", averageScore);
