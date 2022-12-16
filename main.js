//1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent ={
    firstName:"Sukanya",
    lastName:"tulasi",
    fullname(){
        return(this.firstName+" "+this.lastName)
    }
}
const child={
    __proto__:parent
}
console.log(child.fullname());

//2. Write code to explain prototype chaining
function Person(firstName, lastName, age,gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  Person.prototype.getDetails = function(){
    return this.firstName + " " + this.lastName +"is"+this.age+"years old";
  }  
var person = new Person("guntakala","sriram", 25,"Male");
   person.hasOwnProperty("firastName"); 
   person.hasOwnProperty("getDetails");  
   person.getDetails(); 

//3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
arr=[10,20,30,40,50]
arr1=[1,2,3,4,5,6,7,8,9]
arr2=[11,22,33,44,55,66]
// created a method for an array
const arraySum={
    addAll:function(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        console.log(sum);
    }
}
//
Array.__proto__=arraySum;
// arraySum.addAll(arr);  //comment proto for this...
Array.addAll(arr);
Array.addAll(arr1);
Array.addAll(arr2);

//4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
var obj1={
    name:"Prepbytes",
    course:"JS",
    period:"five months"
}
let result=Object.keys(obj1);
console.log(result);