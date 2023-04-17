import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  title='style binding';
  color='red';
  bgColor='green';


  updatecolor(){
    this.color = 'blue'
    this.bgColor='orange'
  }
}
