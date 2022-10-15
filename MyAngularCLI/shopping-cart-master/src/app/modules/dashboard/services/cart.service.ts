import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public products = new BehaviorSubject<any>([])

  constructor() { }

  getProduct(){
    return this.products.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.products.next(product);
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.products.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any) =>
    grandTotal+= a.total)
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.productId === a.productId){
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeAllCart(){
    this.cartItemList = []
    this.products.next(this.cartItemList);
  }
}
