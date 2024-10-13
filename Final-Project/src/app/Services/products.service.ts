import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'https://route-ecommerce.onrender.com/api/v1/'

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'products')
  }
  getProductDetails(productId: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'products/' + productId)
  }
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'cart', {
      'productId': productId
    }, {
      headers: {
        'token': localStorage.getItem('token')!
      }
    })
  }

  getCartProducts(token: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'cart', {
      headers: {
        "token": localStorage.getItem('token')!
      }
    })
  }

  deleteProductItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${productId}`, {
      headers: {
        "token": localStorage.getItem('token')!
      }
    })
  }
  clearUserCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`, {
      headers: {
        "token": localStorage.getItem('token')!
      }
    })
  }

  updateCartProductCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `cart/${productId}`, {
      "count": count
    }, {
      headers: {
        "token": localStorage.getItem('token')!
      }
    })
  }
}
