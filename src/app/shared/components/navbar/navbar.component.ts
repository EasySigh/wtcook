import { Component, Inject } from '@angular/core';
import { NAVBAR_ITEMS } from '@const';

@Component({
  selector: 'wt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(@Inject(NAVBAR_ITEMS) public items: any) {}
}
