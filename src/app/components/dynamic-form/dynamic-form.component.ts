import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      addresses: this.fb.array([this.createAddress()])
    });
  }

  get addresses() {
    return this.userForm.get('addresses') as FormArray;
  }

  createAddress(): FormGroup {
    return this.fb.group({
      street: [''],
      city: [''],
      zip: ['']
    });
  }

  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    const submittedData = this.userForm.value.addresses
        .map((address: any, index: number) => 
            `Address ${index + 1}:\n  Street: ${address.street}\n  City: ${address.city}\n  Zip: ${address.zip}`
        )
        .join('\n\n');
    
    alert(`Form Submitted Successfully!\n\nSubmitted Data:\n${submittedData}`);
    console.log(this.userForm.value);
  }

}
