import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  
  
    productForm!: FormGroup;
    constructor() { }
  
    ngOnInit(): void {
  
      this.productForm = new FormGroup({
        name: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
      });
    }
  
    handleSubmit():void {
      console.log(this.productForm.value);
    }
  
  }
