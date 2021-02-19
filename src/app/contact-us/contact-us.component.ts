import { Component, OnInit } from '@angular/core';
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

  test() {
    var obj = { email: 'gautam.kartik05@gmail.com', subject: 'Test Email filled your form', body: 'Hi, Tester filled your form, please have a look' }
    this.server.sendEmail(obj).subscribe(res => {
      console.log(res)
    })
  }

}
