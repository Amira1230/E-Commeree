import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId: string = ""
  productDetails: any = {}
  srcs!: string[]
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService) {
    _ActivatedRoute.params.subscribe((params) => {
      this.productId = params['id']
      _ProductsService.getProductDetails(this.productId).subscribe({
        next: (response) => {
          console.log(response.data.images);
          this.productDetails = response.data
          this.srcs = response.data.images
        }
      })
    })
  }
  addProductToCart(productId: string) {
    return this._ProductsService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

















  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
