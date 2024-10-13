import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  constructor(private _ProductsService: ProductsService) { }
  @Input() product: any;
  addProductToCart(productId: string) {
    return this._ProductsService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
