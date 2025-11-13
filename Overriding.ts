class Car {
  public brand: string;
  public model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  display(): void {
    console.log(`Car: ${this.brand}, Model: ${this.model}`);
  }
}

class ElectricCar extends Car {
  public battery: string;

  constructor(brand: string, model: string, battery: string) {
    super(brand, model);
    this.battery = battery;
  }

  public override display(): void {
    console.log(`Car: ${this.brand}, Model: ${this.model}, Battery: ${this.battery} kWh`);
  }
}

const obj1 = new Car("Toyota", "Innova");
obj1.display();

const obj2 = new ElectricCar("Tesla", "CyberTruck", "75");
obj2.display();
