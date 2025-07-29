import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Diwali } from '../diwali';

@Component({
  selector: 'app-address',
  standalone: true,
  templateUrl: './address.html',
  styleUrl: './address.css',
  imports: [RouterLink, CommonModule ],
  encapsulation: ViewEncapsulation.None
})


export class Address implements OnInit {
  floatingTexts: { text: string; top: string; left: string; duration: number }[] = [];

  constructor(private diwaliService: Diwali) {}


  ngOnInit() {
    const items = ['Raveendra', '9030550431'];

    for (let i = 0; i < 55; i++) {
      this.floatingTexts.push({
        text: items[i % 2],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 10
      });
    }
  }

  method(){
    this.diwaliService.lastComponent();

  }
}
