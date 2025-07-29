import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Diwali } from '../diwali'; // ✅ Step 1: Import the service

@Component({
  selector: 'app-contactinfo',
  standalone: true,
  templateUrl: './contactinfo.html',
  styleUrl: './contactinfo.css',
  imports: [RouterLink, CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class Contactinfo implements OnInit {
  bubbles: { left: string; size: number; delay: number; color: string }[] = [];

  // ✅ Step 2: Inject the service
  constructor(private diwaliService: Diwali) {}

  ngOnInit() {
    for (let i = 0; i < 40; i++) {
      this.bubbles.push({
        left: `${Math.random() * 100}%`,
        size: 20 + Math.random() * 40,
        delay: Math.random() * 5,
        color: `hsl(${Math.random() * 360}, 70%, 70%)`
      });
    }
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  clickBro(): void {
    this.diwaliService.addressmethod(); // ✅ Now this works correctly
  }
}
