import { Component, OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  model: any = { }
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    mobile: null,
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };

  @ViewChild('userForm') form: any;
  constructor() {}
  ngOnInit() {}
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.form.reset();
    }
  }

}
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  mobile: number;
  age: number;
  address: {
      street: string,
      city: string,
      state: string

  };
  image?: string;
  isActive?: boolean;
  balance?: number;
  registered?: any;
  hide?: boolean;
}
