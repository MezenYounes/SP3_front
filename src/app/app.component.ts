import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trucks';
  router: any;
  constructor (public authService: AuthService) {}
  onLogout(){
    this.authService.logout();
    }
    ngOnInit () {
      this.authService.loadToken();
      if (this.authService.getToken()==null ||
       this.authService.isTokenExpired())
      this.router.navigate(['/login']);
      }
      
  
  }
