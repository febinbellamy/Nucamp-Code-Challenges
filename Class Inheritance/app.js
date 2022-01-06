class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    fireBlast() {
         console.log(`The ${this.element} ${this.type} shoots fire from its mouth!`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.color} ${this.type} howls loudly.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar();
woodDragon.fly();
woodDragon.fireBlast();

const werewolf1 = new Werewolf("werewolf", "green");
werewolf1.howl();

class Zombie extends Monster {
  constructor(type, color, size) {
        super(type, color);
        this.size = size;
    }
    bites() {
      console.log(`The ${this.size} ${this.color} ${this.type} bites both humans and cats!`);
    }
}

const zombie1 = new Zombie("zombie", "red", "large");
zombie1.bites();