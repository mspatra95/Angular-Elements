import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { matchValues } from './helper';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input() pageTitle: string;

  formSubmitted: boolean = false;
  signUpForm: FormGroup;
  submitResponse: Object = null;
  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, matchValues('password')]],
    });
    this.signUpForm.controls.password.valueChanges.subscribe(() => {
      this.signUpForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.apiService.register(this.signUpForm.value).subscribe((res) => {
        this.formSubmitted = true;
        this.submitResponse = res;
      });
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
