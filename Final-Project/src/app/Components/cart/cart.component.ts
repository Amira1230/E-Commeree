import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products!: any;
  updateSetTimeOut: any;
  constructor(private _ProductsService: ProductsService) {

  }
  getCartProducts() {
    this._ProductsService.getCartProducts(localStorage.getItem('token')!).subscribe({
      next: (response) => {
        console.log(response.data.products);
        this.products = response.data.products;
      }
    })
  }
  ngOnInit(): void {
    this.getCartProducts()
  }

  deleteProductItem(productId: string) {
    this._ProductsService.deleteProductItem(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.products = response.data.products;
      }
    })
  }
  clearUserCart() {
    this._ProductsService.clearUserCart().subscribe({
      next: (response) => {
        console.log(response);
        if (response.message == 'success') {
          this.products = [];
        }
      }
    })
  }

  updateCartProductCount(productId: string, count: number) {
    clearTimeout(this.updateSetTimeOut)
    this.updateSetTimeOut = setTimeout(() => {
      if (count == 0) {
        this.deleteProductItem(productId)
      } else {
        this._ProductsService.updateCartProductCount(productId, count).subscribe({
          next: (response) => {
            console.log(response);
            this.products = response.data.products
          }
        })
      }
    }, 500);
  }
}
