import { Routes } from '@angular/router';
import { Address } from './address/address';
import { Contactinfo } from './contactinfo/contactinfo';
import { CrackersContent } from './crackers-content/crackers-content';
import { CrackersBlast } from './crackers-blast/crackers-blast';
import { Information } from './information/information';
import { Assignment2 } from './assignment2/assignment2';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { LoginComponent } from './login-component/login-component';
import { AuthGuard } from './auth-guard'; // ✅ Not './auth.guard'


export const routes: Routes = [
  { path: '', component: CrackersContent },           // Home page
  { path: 'address', component: Address },
  { path: 'contactinfo', component: Contactinfo },
  { path: 'crackerscontent', component: CrackersContent },
  { path: 'crackersblast', component: CrackersBlast },
  { path: 'information', component: Information },
  { path: 'assignment2', component: Assignment2 },
  { path: 'login', component: LoginComponent },
  { path: 'parent', component: Parent, canActivate: [AuthGuard] },
  { path: 'child', component: Child, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
