import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id: number;
  name: string;
  price: number;
  amount: number;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  data: Product[] = [
        {id: 0, name: 'Blue Summer Dress', price: 300, amount: 1, photo:'assets/dress.jpg'},
        {id: 1, name: 'White Summer Dress', price: 300, amount: 1, photo:'assets/dress2.jpg'},
        {id: 2, name: 'Dusty Pink Gown Dress', price: 300, amount: 1, photo:'assets/dress3.jpg'},
        {id: 3, name: 'White Sleeveless Dress', price: 300, amount: 1, photo:'assets/dress4.jpg'},
        {id: 4, name: 'Denim Blue Jean', price: 200, amount: 1, photo:'assets/jean.jpeg'},
        {id: 5, name: 'Ripped Blue Denim', price: 200, amount: 1, photo:'assets/jean2.jpg'},
        {id: 6, name: 'Blue Botleg', price: 200, amount: 1, photo:'assets/jean3.png'},
        {id: 7, name: 'Navy Blue Levis', price: 200, amount: 1, photo:'assets/jean4.jpg'},
        {id: 8, name: 'Sleeveless White Blowse', price: 150, amount: 1, photo:'assets/top.jpg'},
        {id: 9, name: 'Blue Denim Jacket', price: 150, amount: 1, photo:'assets/top3.jpg'},
        {id: 10, name: 'Black Winter Coat', price: 150, amount: 1, photo:'assets/top4.jpg'},
        {id: 11, name: 'Leather jacket', price: 150, amount: 1, photo:'assets/top5.jpeg'}
  ];

  private cart = [];
  private itemCount = new BehaviorSubject(0);

  getClothes(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getItemCount(){
    return this.itemCount;
  }

  addClothes(prod){
    let added = false;
    for (let p of this.cart) {
      if (p.id === prod.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(prod);
    }
    this.itemCount.next(this.itemCount.value + 1);
  }

  deleteClothes(prod){
    for (const [index, p] of this.cart.entries()) {
             if (p.id === prod.id) {
               this.itemCount.next(this.itemCount.value - p.amount);
               this.cart.splice(index, 1);
             }
           }
  }
}
