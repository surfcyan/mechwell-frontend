import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welding',
  templateUrl: './welding.component.html',
  styleUrls: ['./welding.component.scss']
})
export class WeldingComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  getUrl(i) {
    var base = '../../../../assets/dialog-pages/welding/00';
    var ext = '.jpg'
    return base + `${18+i}` + ext
  }

}
