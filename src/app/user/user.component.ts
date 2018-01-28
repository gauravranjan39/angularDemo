import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User:FormGroup;
  constructor (private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  

  ngOnInit() {
     this.User = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  registerUser() {
    if(this.User && this.User.valid) {
      // console.log(this.User.value);
      this.userService.register(this.User.value).subscribe(
        data => {
         if(data.success  === true) {
          this.router.navigate(['/register']);         
        }
        },
        err => {
          alert("Some Error Occurred");
        }
      
      );
    }
  }

}
