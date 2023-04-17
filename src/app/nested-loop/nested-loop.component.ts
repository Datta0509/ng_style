import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent {
  title='nested loop';
  users = [
    {
      name: 'Datta',
      email: 'dattap0509@gmail.com', 
      phn: '9426984593',
      socialAcounts:['fb','insta','yt']
    },
    {
      name: 'Deep',
      email: 'deeppandya1996@gmail.com',
      phn: ' 9409311996',
      socialAcounts:['fb','insta','yt']
    },
    {
      name: 'Dharmendra',
      email: 'dspandya68@gmail.com',
      phn: '9429064593',
      socialAcounts:['fb','insta','linkedin']
    },
    {
      name: 'Nisha',
      email: 'nishapandya70@gmail.com',
      phn: '9428991347',
      socialAcounts:['fb','insta','gmail']
    }
  ]
}
