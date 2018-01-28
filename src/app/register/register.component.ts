import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Register:FormGroup;
  constructor (private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.Register = this.formBuilder.group({
     email: ["", [Validators.required]],
     password: ["", [Validators.required]]
   });
 }

}
