import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:Product[] = [];
sorted =[];
  constructor(private productService:ProductService,
    private cartService : CartService) {}


  ngOnInit(): void {
   this.productService.getProducts().subscribe(res => {
      this.products = res
    })
  }

  sortButtonLow()
  {
      return this.productService.getProductsFilteredLow().subscribe(res => {
        this.products = res
      })
  }

  sortButtonHigh()
  {
      return this.productService.getProductsFilteredPriceHigh().subscribe(res => {
        this.products = res
      })
  }

  sortButtonName(){
    return this.productService.getProductsFilteredByName().subscribe(res => {
      this.products = res;

      this.products.forEach((a:any) =>{
        Object.assign(a,{quantity:1, total:a.productPrice});
      })
    })
  }

  addToCart(prod:any){
    this.cartService.addtoCart(prod)
  }
}
