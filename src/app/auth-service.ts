import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  // Add a list of valid users
  private users = [
    'indrason sir',
    'ravi',
    'sravan',
    'yahwanth',
    'sai',
    'sudheer',
    'nugget'
  ];

  login(username: string, password: string): boolean {
    const trimmedUsername = username.trim().toLowerCase();
    const trimmedPassword = password.trim().toLowerCase();

    const valid = this.users.some(
      user => user.toLowerCase() === trimmedUsername && trimmedUsername === trimmedPassword
    );

    if (valid) {
      this.loggedIn = true;
      return true;
    }

    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
