export default {
  id: '7',
  topic: 'Technology & Education',
  date: '10/01/2018',
  title: 'Introduction to JavaScript',
  image: '../../assets/articles/images/stock_wall_of_code.jpg',
  content: `
Introduction to JavaScript
==========================
##### 10/01/2018

![Wall of Code](../../assets/articles/images/stock_wall_of_code.jpg)

*Quick note before we begin:* I did not post any content last week! My bad... I was lazy and forgetful throughout last weekend and Monday. I decided to forego the article given my carelessness.

I thought about quickly throwing an article together during the midweek madness, but it felt a little off. This blog is committed to weekly posts. If I miss Monday's deadline, then I am out of luck until next week. Rest assured, I will not miss another deadline unless I announce otherwise well in advance. I promise.

Two weeks ago, I hinted at a new category of articles for learning how-to-code. This post is a start to teaching JavaScript (JS). JS is my favorite programming language. I have work with some of its most popular frameworks and libraries. This blog was built using one such framework: Angular. Google developed Angular as a modern Front End framework for JS.

I hope to cover Angular eventually. For now, it is best we stick with a basic language introduction.

### JavaScript

JS is a functional programming language at its core. Recent updates to the language have added syntactic shortcuts for writing object-oriented (OO) code. However, that does not change the fact that JS does not support OO inheritance. JS uses prototypal inheritance so that objects may compose together. This differs from the traditional OO inheritance model where objects form tightly coupled inheritance chains. In this way, an object would have to take on the entire jungle before obtaining the desired banana.

Functional prototypes make it so that an object can have the banana without inheriting the rest of the jungle. This lends JS a sense of programmatic freedom. Prototypes (parents) of an object act as backup to the child object. Prototypes in themselves are just objects deferred to by other objects. Meaning, if a given object lacks the requested property, it defers to its prototype. Either that prototype has the property or it defers to its prototype. This trend continues until the property is found or there are no further prototypes to defer to. In which case, an exception gets thrown.

Time for some code. If you would like to code along, I would recommend either your web browser's console (f12) or [codepen.io](https://codepen.io).

\`\`\`javascript
const mammal = {
  habitat: 'land',
  respiring: true,
  reproductive: true
};

const dog = {
  makeSound: () => 'Woof, woof!',
  legs: 4,
  friends: ['cats', 'humans', 'penguins']
};

Object.setPrototypeOf(dog, mammal);

console.log('Habitat:', dog.habitat);
console.log('Respires: ', dog.respiring);
dog.makeSound();

// OUTPUT
// Habitat: land
// Respires:  true
// Woof, woof!
\`\`\`

'Object' is probably the most fundamental object type in JS. A copy of Object exists wherever JS can execute. It provides an interface for manipulating object prototypes. Another method we could of used instead of \`Object.setPrototypeOf(...)\` is \`Object.create(...)\`. Either method works as per its [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). A set of methods for runtime reflection also exists on top of 'Object'. If you have not dealt with Reflection in computer programming, do not worry about it. Reflection is just a means of examining object metadata at runtime. Feel free to read more on the subject by [clicking here](https://www.htmlgoodies.com/tutorials/web_graphics/object-reflection-in-javascript.html). No knowledge of Reflection is required for this blog post.

Let us take a look at the inner workings of 'Object' and its prototype:

\`\`\`javascript
// new Object() equates to Object.prototype.constructor()
console.log(new Object());
console.log(new Object.prototype.constructor());

// OUTPUT
// {}
// __proto__:
// constructor: ƒ Object() /* <= Contains most of the methods for manipulating prototypes and examining metadata via reflection */
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
\`\`\`

Well, would you look at that. Another way of creating an object is using the 'new' keyword. The traditonal approach is a pair of curly braces as seen in the first code example.

Keywords like 'new' and 'class' are but a mere layer of syntactic sugar. They are meant to appease the growing population of object-oriented JS programmers. Under the hood, the 'new' and 'class' keywords use prototypes to mimic traditional OO object instantiation. More accurately, the 'class' keyword breaks down into a factory function. Factory functions (factories) are plain functions that return object literals (\`{ /* I am an object literal! */ }\`).

We will prove the syntactic trickery of 'new' and 'class' in just a bit. Before that, notice how \`newObject.prototype.constructor()\` and \`new Object()\` achieve the same end-result: a fresh instance of 'Object'. The 'new' keyword requires the object be created from a 'class' declaration containing a constructor. The constructor for 'Object' is actually a function, but the syntax makes it look like a traditional OO class.

\`\`\`javascript
// THE FOLLOWING CLASS...
class dog
{
  makeSound = null;
  legs = null;
  friends = null;

  constructor(makeSound, legs, friends) {
    this.makeSound = makeSound;
    this.legs = legs;
    this.friends = friends;
  }
};

myDog = new dog(() => 'Woof, woof!', 4, ['cats', 'humans', 'penguins']);

// ...IS SYNTACTIC SUGAR FOR...
function dog(makeSound, legs, friends)
{
  return {
    makeSound: makeSound,
    legs: legs,
    friends: friends
  };
}

myDog = dog(() => 'Woof, woof!', 4, ['cats', 'humans', 'penguins']);

// ... MINUS A FEW OTHER INCONSEQUENTIAL DETAILS
\`\`\`

Using the 'new' keyword on a explicitly defined factory as in \`function dog(...)\` will not work. Otherwise, the two approaches are the same pardon the syntactical differences. Logically speaking, \`class dog\` and \`function dog()\` are nearly identical.

I mentioned towards the start of the article that JS is a functional programming language. I meant it. Take a look at the next block of code:

\`\`\`javascript
const dog = {
  makeSound: function() { return this.sound; },
  sound: 'Woof, woof!',
  legs: 4,
  friends: ['cats', 'humans', 'penguins']
};

console.log(dog.makeSound());

const myDog = dog.makeSound;

console.log(myDog());

// OUTPUT
// Woof, woof!
// undefined
\`\`\`

Say what now? One last change will produce the expected behavior:

\`\`\`
// ... previous block of code ...
const myDog = dog.makeSound.bind(dog);
// ... previous block of code ...
// OUTPUT
// Woof, woof!
// Woof, woof!
\`\`\`

There we go! As it happens, assigning the value of a single property from one object to a destination does not mean the context of said property carries over. The destination here is the myDog constant variable; the context and 'one object' both consitute the 'dog' object; the single property defines 'makeSound' and its functional value. 'bind(...)' provides a way of grabbing a function's raw value and assigning it a specific context in the form of a declared object. In our second iteration of the above example, the makeSound function had its context set to the 'dog' object before have its value stored within the myDog variable.

*Quick aside:* we went from \`() => /* return value */\` to \`function() { return /* return value */; }\`. Why is that? In the former case, arrow-head functions have no context. That basically means their value for 'this' is undefined and cannot be set by external logic. This differs drastically from 'function() {}' which does define 'this' ('this' captures the value of a given context). The function remains anonymous (unnamed) for the sake of simplicity. The 'makeSound' property label identifies the function without the programmer needing to name the function in its declaration/signature.

OK. This seems like a lot of pitfalls. I agree because keywords like 'new' and 'class' were forced into the language's specification. Object-oriented programmers were not enthused by the concept of prototypal inheritance, so a hacky work-around was created in the form of 'new' and 'class'. These keywords do their best to mimic their traditional, object-oriented counterparts. The catch being, JS is functional at its core even if object-oriented in its syntax.

Why would we prefer prototypal inheritance instead of traditional OO inheritance? Good question. The reason is composition. Remember the jungle-banana analogy from before? The goal of prototypes is so that we can grab the banana object, compose it into a new object, and set that object's prototype to something else entirely. This makes it so that we can disassociate the banana from the jungle without breaking any rules of inheritance. We can compose objects into each other without worrying about parent object constraints.

\`\`\`javascript
const jungle = {
  acres: 423,
  location: 'Africa',
  animals: [
    {
      animal: 'tiger',
      pattern: 'stripes',
      legs: 4,
      arms: 0
    },
    {
      animal: 'lemur',
      pattern: 'ring',
      legs: 2,
      arms: 2
    },
    {
      animal: 'frog',
      pattern: 'speckled',
      legs: 4,
      arms: 2
    }
  ],
  fruits: [
    {
      fruit: 'banana',
      color: 'yellow',
      sweet: false
    },
    {
      fruit: 'apple',
      color: 'red',
      sweet: true
    },
    {
      fruit: 'pear',
      color: 'green',
      sweet: false
    }
  ]
};

const tigerBanana = Object.setPrototypeOf(
  {
    hybrid: true,
    description: 'A tiger that ate too many bananas.',
    dangerLevel: 4
  },
  Object.assign(
    jungle.animals.find(a => a.animal == 'tiger'),
    jungle.fruits.find(f => f.fruit == 'banana')
  )
);

console.log(tigerBanana);
console.log(tigerBanana.animal);
console.log(tigerBanana.fruit);

// OUTPUT
// { dangerLevel: 4
// description: "A tiger that ate too many apples; you are what you eat after all!"
// hybrid: true }
// tiger
// banana
\`\`\`

tigerBanana exemplifies object composition using a prototype. Tiger + Banana = tigerBanana. No extraneous information made it into the tigerBanana object. We grabbed information pertaining only the tiger and the banana and constructed the corresponding object. Information concerning the location and size of the jungle stays inside of the jungle object.

Extending from a long-running OO inheritance chain can lead to information overload on behalf of the child objects, especially in the case of tigerBanana. Prototypal inheritance uses composition to avoid the tight coupling of OO inheritance models. Keeping everything contained within separate, composable parts increases code reusability and flexibility.

Next Monday will have more in store for JS. We will learn more about modern JS syntax including the 'new' and 'class' keywords. Concepts such as destructuring, arrow-head functions, and spread operators are also on the list of things to cover. Until then!
`
};
