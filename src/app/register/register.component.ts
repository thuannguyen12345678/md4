import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public name: any ='';
  public password: any = '';
  public confirmPassword: any = '';
  public Country: any = ['Việt Nam','Hàn Quốc','Singapore','Trung Quốc','Nhật Bản', ];
  public age? = '';
  public Genders: any = ['Nam','Nữ','Giới tính khác'];
  public Phone: any = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(value:any):void {
    console.log(value);
  }


}
