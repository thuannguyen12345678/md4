import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id: any = 0;
  product!: Product;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id=id;
      this.product = this._ProductService.find(id);
    });
  }

  handleYes(){
    this._ProductService.destroy(this.id);
    //chuyển hướng đến sản phẩm
    this._Router.navigate(['/']);
  }
  handleNo(){
    //chuyển hướng đến sản phẩm
    this._Router.navigate(['/']);
  }
}
