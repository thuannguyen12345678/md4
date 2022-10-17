import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  productForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
    });
  }

  onSubmit() {
    //xử lý biểu mẫu gửi
    let formData = this.productForm.value;
    let product: Product = {
      name: formData.name,
      price: formData.price
    }
    // call service update
    this._ProductService.store(product);

    //chuyển hướng đến product
    this._Router.navigate(['/products']);
    this._Router.navigate(['/']);
  }

  // handleSubmit(product:Product):void {
   
  //   this._ProductService.push(product);
  // }

}
