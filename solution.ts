{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }
    return input.toUpperCase();
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let filteredItems: { title: string; rating: number }[] = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].rating >= 4) {
        filteredItems.push(items[i]);
      }
    }
    return filteredItems;
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];

    for (const item of arrays) {
      for (const element of item) {
        result.push(element);
      }
    }
    return result;
  }

  class Vehicle {
    private _make: string;
    private _year: number;

    constructor(make: string, year: number) {
      this._make = make;
      this._year = year;
    }

    private getVehicleInfo(): string {
      return `Make: ${this._make}, Year: ${this._year}`;
    }

    getInfo(): string {
      return this.getVehicleInfo();
    }
  }

  class Car extends Vehicle {
    private _model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this._model = model;
    }

    private getCarModel(): string {
      return `Model: ${this._model}`;
    }

    getModel(): string {
      return this.getCarModel();
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    }

    return value * value;
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    let mostExpensiveProduct: Product = products[0];

    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i];
      }
    }
    return mostExpensiveProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n >= 0) {
        setTimeout(() => resolve(n * n), 1000);
      } else {
        reject("Error: Negative number not allowed");
      }
    });
  }
}
