import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(username:string, password:string) {
    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
      // Navigate to the home component if the login is successful
      this.router.navigate(['/dash']);
    } else {
      // Display an alert if the login is unsuccessful
      alert('Invalid username or password!');
    }
  }
}
