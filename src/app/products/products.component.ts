import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { title: 'Welding Jigs & Fixture', bg: '../../assets/homePageImage.jpg' },
    { title: 'Robotics Cell & Automations', bg: '../../assets/homePageImage.jpg' },
    { title: 'SPM', bg: '../../assets/homePageImage.jpg' },
    { title: 'Fabrication & Machining', bg: '../../assets/homePageImage.jpg' },
    { title: 'Line Automation', bg: '../../assets/homePageImage.jpg' },
    { title: 'Simulation', bg: '../../assets/homePageImage.jpg' },
    { title: 'Automobile Components', bg: '../../assets/homePageImage.jpg' },
    { title: 'Gauges & Panel Checkers', bg: '../../assets/homePageImage.jpg' },
    { title: 'Tools & Dies', bg: '../../assets/homePageImage.jpg' },
  ]

}
