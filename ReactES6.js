import { named, age } from "./exports.js";
import 'bootstrap/dist/css/bootstrap.css';

/*
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

mycar = new Car("Ford");
document.getElementById('1').innerHTML = mycar.present();

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
mycar1 = new Model("Ford", "Mustang");
document.getElementById('2').innerHTML = mycar1.show();


hello = () => "Hello World!";

document.getElementById("3").innerHTML = hello();


hello = val => "Hello " + val;

document.getElementById("4").innerHTML = hello("World");


class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = function() {
    document.getElementById("5").innerHTML += this;
  }
}
myheader = new Header();
//The window object calls the function:
window.addEventListener("load", myheader.changeColor);
//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);




class Header1 {
  constructor() {
    this.color = "Red";
  }
  changeColor = () => {
    document.getElementById("6").innerHTML += this;
  }
}
myheader = new Header1();
//The window object calls the function:
window.addEventListener("load", myheader.changeColor);
//A button object calls the function:
document.getElementById("btn1").addEventListener("click", myheader.changeColor);




function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

document.getElementById('7').innerHTML = "Sum = "+ add +"<br>";
document.getElementById('7').innerHTML += "Difference " + subtract +"<br>";
document.getElementById('7').innerHTML += "Product: " + multiply +"<br>";
document.getElementById('7').innerHTML += "Quotient " + divide +"<br>";







const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'Red'
}
myVehicle(vehicleOne);
function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';

  document.getElementById("8").innerHTML = message;
}





const vehicleOne1 = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'Car',
  year: 2021,
  color: 'Red',
  registration: {
    city: 'Houston',
    state:'Texas',
    Country: 'USA'
  }
}

myVehicle1(vehicleOne1);
function myVehicle1({ model, registration:{state} }) {
  const message1 = 'My '+ model + ' is registered in '+ state + ' . ';
  document.getElementById('9').innerHTML = message1;
}





const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
document.getElementById('10').innerHTML = numbersCombined;



const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
document.getElementById('11').innerHTML = "<p>" + one + "</p>";
document.getElementById('11').innerHTML += "<p>" + two + "</p>";
document.getElementById('11').innerHTML += "<p>" + rest + "</p>";




const myVehicle2 = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle2, ...updateMyVehicle}

//Check the result object in the console:
console.log(myUpdatedVehicle);



document.getElementById('30').innerHTML = "My name is "+ named +" and My age is " + age ;
*/


