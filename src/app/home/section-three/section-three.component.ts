import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  items = [
    { title: 'Slide 1', gif: '../../../assets/products/giphy.gif' },
    { title: 'Slide 2', gif: '../../../assets/products/giphy.gif' },
    { title: 'Slide 3', gif: '../../../assets/products/giphy.gif' },
    { title: 'Slide 4', gif: '../../../assets/products/giphy.gif' },
    { title: 'Slide 5', gif: '../../../assets/products/giphy.gif' },
    { title: 'Slide 6', gif: '../../../assets/products/giphy.gif' },
    { title: 'Slide 7', gif: '../../../assets/products/giphy.gif' },
  ]

}
