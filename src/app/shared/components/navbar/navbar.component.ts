import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'wt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public items: MenuItem[] = [
    {label: 'Вход', routerLink: '/auth/login', icon: PrimeIcons.SIGN_IN},
    {label: 'Регистрация', routerLink: '/auth/join', icon: PrimeIcons.PENCIL}
  ];
}
