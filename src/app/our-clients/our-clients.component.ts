import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clientsObj = [
    { title: 'MARUTI SUZUKI INDIA LIMITED', img: '../../assets/homePageImage.jpg' },
    { title: 'MAHINDRA & MAHINDRA', img: '../../assets/homePageImage.jpg' },
    { title: 'HONDA(HMSI)', img: '../../assets/homePageImage.jpg' },
    { title: 'HONDA CARS INDIA LTD', img: '../../assets/homePageImage.jpg' },
    { title: 'MG MOTORS', img: '../../assets/homePageImage.jpg' },
    { title: 'JCB', img: '../../assets/homePageImage.jpg' },
    { title: 'MONITOU', img: '../../assets/homePageImage.jpg' },
    { title: 'UM INDIA', img: '../../assets/homePageImage.jpg' },
    { title: 'ESCORT LIMITED', img: '../../assets/homePageImage.jpg' },
    { title: 'KUBORTA', img: '../../assets/homePageImage.jpg' },
    { title: 'HERO MOTOCORP', img: '../../assets/homePageImage.jpg' },
    { title: 'JBM', img: '../../assets/homePageImage.jpg' },
    { title: 'KR AUTO COMPONENTS', img: '../../assets/homePageImage.jpg' },
    { title: 'PLASSER INDIA PVT LTD', img: '../../assets/homePageImage.jpg' },
    { title: 'RICO GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'VEE GEE GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'NEEL METAL GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'INDO GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'BADVE GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'ALF ENGINEERING PVT LTD', img: '../../assets/homePageImage.jpg' },
    { title: 'ENCO GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'ANAND GROUP', img: '../../assets/homePageImage.jpg' },
    { title: 'SEITZ INDIA PVT LTD', img: '../../assets/homePageImage.jpg' },
    { title: 'PRANAV VIKAS INDIA PVT.LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'RICO AUTO INDUSTRIES LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'ROCKMAN AUTO INDUSTRIES LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'SDL AUTO', img: '../../assets/homePageImage.jpg' },
    { title: 'SUBROS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'SONA OKEHGAWA PRECISION FORGING LTD', img: '../../assets/homePageImage.jpg' },
    { title: 'SUZUKI MOTORCYCLE INDIA PVT.LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'TECHNICO AUTO INDUSTRIES.', img: '../../assets/homePageImage.jpg' },
    { title: 'THAI SUMMIT NEEL AUTO PVT.', img: '../../assets/homePageImage.jpg' },
    { title: 'VICTORA TOOL ENGINEERS', img: '../../assets/homePageImage.jpg' },
    { title: 'VENUS INDUSTRIAL CORP', img: '../../assets/homePageImage.jpg' },
    { title: 'BHARAT SEATS', img: '../../assets/homePageImage.jpg' },
    { title: 'BAJAJ MOTORS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'DENSO INDIA LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'E.C.E.L.', img: '../../assets/homePageImage.jpg' },
    { title: 'GLOBAL AUTOTECH LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'GKN DRIVE LINE LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'HEMA ENGG.INDUSTRIES LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'HERO MOTORS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'HERO HONDA MOTORS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'HONDA SIEL CARS INDIA LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'INDO AUTOTECH LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'INTERNATIONAL TRACTORS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'JBM INDUSTRIES LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'JCB INDIA LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'MARUTI UDYOG Ltd.', img: '../../assets/homePageImage.jpg' },
    { title: 'MOTHERSON SUMI SYSTEMS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'NEW HOLLAND TRACTORS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'OMAX FUSIONS LTD.', img: '../../assets/homePageImage.jpg' },
    { title: 'DELHI METRO RAIL CORPORATION', img: '../../assets/homePageImage.jpg' },
    { title: 'OMAX AUTO LTD.', img: '../../assets/homePageImage.jpg' },
  ]

}
