import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service'; // ✅ Corrected path

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']  // ✅ styleUrls not styleUrl
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/parent']);
    } else {
      alert('Invalid credentials');
    }
  }
}
