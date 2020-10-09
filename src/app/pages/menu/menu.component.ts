import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent implements OnInit {

  cart = [];
  items = [];
  itemCount: BehaviorSubject<number>;
  image;
  
  
  profileUrl: Observable<string | null>;

  constructor(private storage: AngularFireStorage, private  dialog: MatDialog,
               private productsService: ProductsService, private router: Router, 
               private matGrid: MatGridListModule) {
   }

  ngOnInit() {
    this.cart = this.productsService.getCart();
    //this.items = this.productsService.getClothes();
    this.itemCount = this.productsService.getItemCount();

    this.productsService.getImage().subscribe(data_I => {
      this.items = [];
      data_I.forEach( a => {
        let data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        this.items.push(data);
      })
    })
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

  insertFile(event){
    this.productsService.uploadFile(event)
  }
}
