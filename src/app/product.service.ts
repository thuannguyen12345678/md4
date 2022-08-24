import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor() {
    let old_products = window.localStorage.getItem('products');
    if( !old_products ){
      this.products = [
        // {
        //   id:1,
        //   name:'BMW',
        //   price:20000
        // },
        // {
        //   id:2,
        //   name:'TESLA',
        //   price:20000
        // },
        // {
        //   id:3,
        //   name:'Iphone 9',
        //   price:20000
        // }
      ];
      let stringProducts = JSON.stringify(this.products);
      window.localStorage.setItem('products',stringProducts);
    }else{
      this.products = JSON.parse(old_products);
    }
   }

  //lây tất cả
  getAll(): Product[] {
    return this.products;
  }
//lây 1 item theo id
  find(idx:any): Product{
    return this.products[idx];
  }

  //store
  store(product:Product):void {
    this.products.push(product);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //save
  save(product:Product){
    this.products.push(product);

    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //update
  update(idx:number ,product:Product):void {
    this.products[idx]=product;

    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //destroy
  destroy(idx:number):void {
    this.products.splice(idx,1);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }


  //search
  // search(q:any):Product[] {
  //   let results:Product[] = [];
  //   for( let product of this.products ){
  //     if(product.name == q){
  //       results.push(product);
  //     }
  //   }
  //   return results;
  // }
}
