class MenuItem {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    display() {
      console.log(`${this.name}: $${this.price} - ${this.description}`);
    }
  }
  
  class Menu {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    viewMenu() {
      console.log("Menu:");
      this.items.forEach(item => item.display());
    }
  
    deleteItem(index) {
      this.items.splice(index, 1);
      console.log(`Item at index ${index} has been deleted.`);
    }
  }
  
  const menu = new Menu();
  
  const menuItem1 = new MenuItem("Cheeseburger", 10.99, "Juicy beef patty with melted cheese on a toasted bun.");
  const menuItem2 = new MenuItem("Caesar Salad", 8.99, "Romaine lettuce with Parmesan cheese and croutons.");
  const menuItem3 = new MenuItem("Spaghetti Bolognese", 12.99, "Classic Italian pasta dish with meat sauce.");
  
  menu.addItem(menuItem1);
  menu.addItem(menuItem2);
  menu.addItem(menuItem3);
  
  menu.viewMenu(); // view all menu items
  
  menu.deleteItem(1); // delete second item
  
  menu.viewMenu(); // view updated menu
  