import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
    else{
      document.body.style.overflow = "auto"
    }
    this.open = !this.open;
  }

}
