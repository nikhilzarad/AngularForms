import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
subscriptions = ['basic', 'pro', 'enterprise'];
  user = {
    username: '',
    email: '',
    subscription: 'basic',
    newsletter: false
  };

  onSubmit(userForm: any) {
    console.log('Form Submitted!', userForm);
    const submittedData = `
      Username: ${userForm.value.username}
      Email: ${userForm.value.email}
      Subscription: ${userForm.value.subscription}
      Newsletter: ${userForm.value.newsletter ? 'Yes' : 'No'}
    `;
    alert(`Form Submitted Successfully!\n\nSubmitted Data:\n${submittedData}`);
  }
}
