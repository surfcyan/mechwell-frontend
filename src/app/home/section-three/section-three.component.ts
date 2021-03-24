import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsComponent } from 'src/app/products/products.component';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {

  constructor() {
  }

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
    { title: 'Welding Jigs & Fixture', bg: '../../assets/products/weld_bg.png', type: 'welding', bg_size: 'cover', color: 'white' },
    { title: 'Robotics Cell & Automations', bg: '../../assets/products/robo_bg.png', type: 'robotics', bg_size: 'contain', color: 'black' },
    { title: 'SPM', bg: '../../assets/products/spm/spm.png', type: 'spm', bg_size: 'contain', color: 'black' },
    { title: 'Fabrication & Machining', bg: '../../assets/products/line/fixtureline.png', type: 'fab', bg_size: 'cover', color: 'white' },
    { title: 'Line Automation', bg: '../../assets/products/line/fixtureline.png', type: 'line', bg_size: 'cover', color: 'black' },
    { title: 'Simulation', bg: '../../assets/products/simulation/sim_bg.jpeg', type: 'sim', bg_size: 'cover', color: 'white' },
    { title: 'Automobile Components', bg: '../../assets/products/automobile/auto_bg.jpeg', type: 'auto', bg_size: 'cover', color: 'white' },
    { title: 'Gauges & Panel Checkers', bg: '../../assets/products/gauges/gauges.png', type: 'gauges', bg_size: 'cover', color: 'black' },
    { title: 'Tools & Dies', bg: '../../assets/products/tools/tools_dies.jpeg', type: 'tools', bg_size: 'cover', color: 'white' },
  ]


}
