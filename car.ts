class Car {
    public brand : string;
    public model : string;

    constructor(brand : string, model : string) {
        this.brand = brand;
        this.model = model;
    }

    display() : void {
        console.log(`Car : ${this.brand} , Model : ${this.model}`);
    }

  
}
  const obj = new Car("Toyota" , "Innova");
    obj.display()