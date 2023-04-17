import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent {
  title = 'for loop component';
  users = ['Datta', 'Deep', 'Yash', ' Ishwa', 'Neel '];
  userDetails = [
    {
      name: 'Datta',
      email: 'dattap0509@gmail.com', 
      phn: '9426984593'
    },
    {
      name: 'Deep',
      email: 'deeppandya1996@gmail.com',
      phn: ' 9409311996'
    },
    {
      name: 'Dharmendra',
      email: 'dspandya68@gmail.com',
      phn: '9429064593'
    },
    {
      name: 'Nisha',
      email: 'nishapandya70@gmail.com',
      phn: '9428991347'
    }
  ]
}
