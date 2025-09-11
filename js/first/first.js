name = "shishupal"
age = 24
float = 24.55
isfollow = true
a = null
y = undefined

console.log(name);
console.log(age);

let names = "shishupalk" // value can be updated
console.log(names);

let ages = 25
console.log(ages)

const r = 14.5 // value of const can't be changed
console.log(r)

//objects
const student= { //const obj -> key can be changed like- age:24
  name: "shishupal",
  age : 24,
  isPassed: true,
};

//way to print object
console.log(student["age"])
console.log(student["isPassed"])
console.log(student.name)
console.log(student.isPassed)

student["age"] = student["age"] +1;
console.log(student.age)
