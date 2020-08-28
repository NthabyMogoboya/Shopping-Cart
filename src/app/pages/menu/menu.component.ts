import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent implements OnInit {

  cart = [];
  items = [];
  itemCount: BehaviorSubject<number>;


  constructor(private  dialog: MatDialog, private productsService: ProductsService, private router: Router, private matGrid: MatGridListModule) { }

  ngOnInit() {
    this.cart = this.productsService.getCart();
    this.items = this.productsService.getClothes();
    this.itemCount = this.productsService.getItemCount();
  }

  addToCart(product){
    this.productsService.addClothes(product);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
  openCart(){
    this.router.navigate(['cart'])
  }
}
