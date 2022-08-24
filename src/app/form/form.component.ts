import { Component, OnInit } from '@angular/core';
import { formatData } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // myLogin = new formatData();
  public name: any ='';
  public password: any = '';
  public oto = ['BMW', 'TESLAR', 'VINFART','HONDA'];
  private selectedOto = '';

  constructor() { }

  ngOnInit(): void {
  }



  // formLogin(): void {
  //   console.log('name:' + this.name);
  //   console.log('password:' + this.password);
  //   console.log('selected Oto:' + this.selectedOto);
  // }
  handleSubmit(value:any):void {
    console.log(value);
  }

  
  // public selectOto(){
  //   this.selectOto;
  // }
}
