import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  user:any=[
    {
      id:1,
      name:"siva",
      age:21,
      gender:"female"
    },
      {
        id:4,
      name:"ranjani",
      age:21,
      gender:"female"
    },  {
      id:3,
      name:"siva",
      age:21,
      gender:"female"
    }
  ]
}
