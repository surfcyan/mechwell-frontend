import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private dialog: MatDialog, private _activeRoute: ActivatedRoute) {
    _activeRoute.queryParams.subscribe(res => {
      console.log(res)
      if (res.ref)
        this.openDialog(res.ref);
    })
  }

  ngOnInit(): void {
  }

  items = [
    { title: 'Welding Jigs & Fixture', bg: '../../assets/products/weld_bg.png', type: 'welding', bg_size: 'cover', color: 'white' },
    { title: 'Robotics Cell & Automations', bg: '../../assets/products/robo_bg.png', type: 'robotics', bg_size: 'contain', color: 'black' },
    { title: 'SPM', bg: '../../assets/products/spm/spm.png', type: 'spm', bg_size: 'contain', color: 'black' },
    { title: 'Fabrication & Machining', bg: '../../assets/products/fabrication/fab.png', type: 'fab', bg_size: 'cover', color: 'white' },
    { title: 'Line Automation', bg: '../../assets/products/line/fixtureline.png', type: 'line', bg_size: 'cover', color: 'black' },
    { title: 'Simulation', bg: '../../assets/products/simulation/sim_bg.jpeg', type: 'sim', bg_size: 'cover', color: 'white' },
    { title: 'Automobile Components', bg: '../../assets/products/automobile/auto_bg.jpeg', type: 'auto', bg_size: 'cover', color: 'white' },
    { title: 'Gauges & Panel Checkers', bg: '../../assets/products/gauges/gauges.png', type: 'gauges', bg_size: 'cover', color: 'black' },
    { title: 'Tools & Dies', bg: '../../assets/products/tools/tools_dies.jpeg', type: 'tools', bg_size: 'cover', color: 'white' },
  ]

  openDialog(index) {
    this.dialog.open(ProductViewComponent, { data: this.items[index] });
  }

}

@Component({
  selector: 'view-products',
  templateUrl: './product-view.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductViewComponent implements OnInit {

  ngOnInit(): void {
  }

  type = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log(data)
    this.type = data['type']
  }

}