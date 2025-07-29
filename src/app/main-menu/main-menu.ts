import { Router, RouterModule, Routes, RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Address } from "../address/address";
import { Contactinfo } from '../contactinfo/contactinfo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-menu',
  imports: [RouterModule, RouterLink, Address, Contactinfo, RouterOutlet , FormsModule ],
  standalone: true,
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
  dayNum: string = '';
  month: string = '';
  currentYear: number = new Date().getFullYear();

  // New variables for search
  searchTerm: string = '';
  showMessage: boolean = false;
  crackers: string[] = ['flower pot', 'sparkler', 'rocket', 'bomb', 'chakri', 'fountain', 'garland', 'ravi'];

  constructor() {
    const date = new Date();
    this.dayNum = String(date.getDate()).padStart(2, '0');
    this.month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  }

  // Add this method
  searchCracker() {
    const input = this.searchTerm.trim().toLowerCase();
    if (this.crackers.some(c => c.toLowerCase() === input)) {
      window.alert("yes yes i am there u can buy me ");
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000); // disappears after 2 seconds
    }
    else {
      window.alert("Sorry , Extremely Sorry to say this we dont have you searched product , come later ");
    }
  }
}
