import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  open = false;
  openMenu() {
    document.getElementById("menu").classList.toggle("menu-hide");
    document.getElementById("brgr-menu").classList.toggle("open-brger")
    document.getElementById("brgr-menu").classList.toggle("fa-bars")
    document.getElementById("brgr-menu").classList.toggle("fa-close")
    if (!this.open) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
    this.open = !this.open;
  }

}
