import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'; '@angular/core';
@Component({
  selector: 'app-forms-comp',
  templateUrl: './forms-comp.component.html',
  styleUrls: ['./forms-comp.component.css']
})
export class FormsCompComponent {
  title='angular forms';
  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  loginUser(){
    console.warn(this.loginForm.value);
    
  }
}
