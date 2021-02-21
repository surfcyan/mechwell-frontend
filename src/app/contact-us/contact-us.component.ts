import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private server: ServerService) { }

  ngOnInit(): void {
  }

  formDet = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    msg: new FormControl(''),
  })

  sendMail(obj) {
    this.server.sendEmail(obj).subscribe(res => {
      console.log(res)
    })
  }

  submit() {
    var email = this.formDet.get('email').value;
    var name = this.formDet.get('name').value;
    var msg = this.formDet.get('msg').value;
    var phone = this.formDet.get('phone').value;

    var obj = {
      email: 'gautam.kartik05@gmail.com', subject: `${name} Wants to Connect With You`, body: `Hi, NAME:${name}
    EMAIL: ${email}
    PHONE: ${phone}
    MESSAGE:${msg}`
    }
    this.sendMail(obj)
    console.log(this.formDet.value)
  }

}
