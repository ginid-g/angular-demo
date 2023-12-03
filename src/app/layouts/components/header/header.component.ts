import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showNotifications: boolean = false;
  showSearchField: boolean = false;
  showUserDropdown: boolean = false;
  showNotificationDropdown = false;

  userName: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user.subscribe((result) => {
      this.userName = !!result ? result.userName : undefined;
    });
  }

  toggleSearch() {
    this.showSearchField = !this.showSearchField;
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }

  toggleSearchField() {
    this.showSearchField = !this.showSearchField;
  }

  toggleNotificationDropdown() {
    this.showNotificationDropdown = !this.showNotificationDropdown;
  }

  logout() {
    this.authService.logOutUser();
    this.router.navigateByUrl('/');
  }

  toggleMobileMenu() {}
}
