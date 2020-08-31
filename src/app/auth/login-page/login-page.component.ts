import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  message: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Please check sign in fields';
      } else if (params.authFaileed) {
      }
    });

    this.form = new FormGroup({
      login: new FormControl(null, []),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      login: this.form.value.login,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe(() => {
        localStorage.setItem('approver', user.login);
        this.form.reset();
        this.router.navigate(['/', 'home']);
      }, error => console.log(error)
    );
  }
}
