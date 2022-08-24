import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  productForm!: FormGroup;
  id:any;
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
    ) {}
  

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.product = this._ProductService.find(id);
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name,[
          Validators.required,
          Validators.minLength(3)
        ]),
        price: new FormControl(this.product.price,[
          Validators.required,
          Validators.minLength(3)
        ]),
      });
    });
  }
  handleSubmit():void {
    // console.log(this.productForm.value);
    let productData:Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this._ProductService.update(this.id,productData);

    //chuyen huong ve list
    this._Router.navigate(['/']);
  }

}
