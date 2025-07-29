import { Component, } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MainMenu } from './main-menu/main-menu';
import { Address } from "./address/address";
import { Contactinfo } from './contactinfo/contactinfo';
import { CrackersContent } from './crackers-content/crackers-content';
import { CrackersBlast } from './crackers-blast/crackers-blast';
import { Information } from './information/information';
import { Assignment2 } from './assignment2/assignment2';
import { Parent } from './parent/parent';
import { LoginComponent } from './login-component/login-component';
import { Child } from './child/child';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenu, RouterModule, Address , Contactinfo, CrackersContent, CrackersBlast, Information , Assignment2,Parent , LoginComponent , Child],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Diwali-Crackers';
}
