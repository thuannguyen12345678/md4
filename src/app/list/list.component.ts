import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
products: Product[] = [];
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._ProductService.getAll();
    console.log(this.products);
  }

}
