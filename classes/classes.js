class Dog {
  // This is a public property
  myProperty = 'My property'
  // This is a private property
  #hunger
  // This is a static property. We have access to it without a class instance.
  static myStatic = 123

  constructor(state = 'happy', hunger = false) {
    this.state = state
    this.#hunger = "hungry"
  }

  talk() {
    console.log(`I'm a ${this.state} and I'm ${(this.#hunger) ? 'very hungry' : 'not hungry'}`)
  }

  static eat() {
    console.log(this.myStatic, 'I am eating!')
  }
}

Dog.eat()
const happy = new Dog('happy')
// This won't appear on Node, but you can see it on the browser. Either way __proto__ can be accessed internally.
console.log(happy.__proto__)
happy.talk()

