function Doge(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Doge";
  this.image = "images/doge.png"
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Cat";
  this.image = "images/cat.png"
}

function WhiteTiger(name, age) {
  this.name = name;
  this.age = age;
  this.type = "White Tiger";
  this.image = "images/tiger.png"
}

var names = ["Prince", "Meow", "Snow White"]
var animals = [new Doge(), new Cat(), new WhiteTiger()]


function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  var randomIndex = generateRandomIndex(names.length);
  return names[randomIndex];
}

function generateRandomAge() {
  return generateRandomIndex(5);
}

function generateRandomAnimal() {
  var randomIndex = generateRandomIndex(animals.length);
  var randomAnimal = animals[randomIndex];

  if (randomAnimal instanceof Doge) 
  {
    return new Doge(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof WhiteTiger) 
  {
    return new WhiteTiger(generateRandomName(), generateRandomAge());
  }
}


/*** Document Load ****/
$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});