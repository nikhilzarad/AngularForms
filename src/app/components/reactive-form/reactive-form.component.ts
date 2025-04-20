import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator } // Add the custom validator here
    );
  }

  // Custom validator for password matching
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { mismatch: true }; // Return an error object if passwords don't match
    }
    return null; // Return null if valid
  }

  onSubmit() {
    if (this.form.valid) {
        const submittedData = `
          Username: ${this.form.value.username}
          Password: ${this.form.value.password}
        `;
        alert(`Form Submitted Successfully!\n\nSubmitted Data:\n${submittedData}`);
        console.log('Form Submitted', this.form.value);
    }
  }
}
