import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contactForm :FormGroup;
  SubmissionStatus:'success' | 'error' | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      subject: ['',[Validators.required, Validators.minLength(5)]],
      message: ['',[Validators.required, Validators.minLength(10)]],
    });
  }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email'); 
  }
  get subject(){
    return this.contactForm.get('subject');
  }
  get message(){
    return this.contactForm.get('message');
  }

  onSubmit(){
    if(this.contactForm.valid){
      // Simulate form submission
      console.log('Form Submitted', this.contactForm.value);
      this.SubmissionStatus = 'success';
      this.contactForm.reset();
    } else {
      this.SubmissionStatus = 'error';
      this.contactForm.markAllAsTouched();
    }

    setTimeout(() => {
      this.SubmissionStatus = null;
    }, 5000);
  }
}
