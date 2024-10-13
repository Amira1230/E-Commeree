import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private _ProductsService: ProductsService) { }
  products: any[] = [];
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.products = response.data;
      }
    })
  }
}
