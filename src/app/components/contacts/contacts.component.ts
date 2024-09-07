import { FormsModule, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
 

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Handle the form submission
      const formData = {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      };

      // Here you might want to send the form data to a server or email service
      console.log('Form Submitted', formData);

      // Optionally reset the form after submission
      form.resetForm();
    } else {
      console.log('Form is invalid');
    }
  }
}