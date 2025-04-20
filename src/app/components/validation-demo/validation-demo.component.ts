import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-validation-demo',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './validation-demo.component.html',
  styleUrl: './validation-demo.component.scss'
})
export class ValidationDemoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', 
        [Validators.required, Validators.minLength(3)],
        [this.asyncUsernameValidator.bind(this)]
      ],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.min(18), Validators.max(99)]]
    });
  }

  asyncUsernameValidator(control: any): Observable<any> {
    return of(control.value === 'admin' ? { usernameTaken: true } : null)
      .pipe(delay(1000));
  }

  get username() { return this.form.get('username'); }

}
