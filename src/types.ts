export interface Item {
    quantity: number;
    id: string;
    name: string;
    price: number;
    description: string;
  }
  
  export interface User {
    id: string;
    name: string;
    age: number;
    cart: Item[];
  }

  export interface Item {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
  }

function testFunction(name:string):void{
    console.log(name)
}

testFunction('Derrick')
