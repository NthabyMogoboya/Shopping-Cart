import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = []
  priceAmnt: any;

  constructor(private productService: ProductsService) { }

  displayedColumns: string[] = ['amount', 'name', 'price', 'delete'];

  ngOnInit() {
   this.cart = this.productService.getCart();

  }

  deleteProduct(product){
    this.productService.deleteClothes(product)
  }

  getTotal(){
    this.priceAmnt = this.cart.reduce((i,j) => i + j.price * j.amount, 0);
    return this.priceAmnt;
  }

}
