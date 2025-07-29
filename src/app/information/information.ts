import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Diwali } from '../diwali'; // ✅ your service path

@Component({
  selector: 'app-crackers-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './information.html',
  styleUrl: './information.css'
})
export class Information {
  crackersForm: FormGroup;

  constructor(private fb: FormBuilder, private diwaliService: Diwali) {  // ✅ added service
    this.crackersForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      age: ['', [Validators.required, Validators.min(13)]],
      address: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(1)]],
      selectedCrackers: ['', Validators.required],
      confirmation: ['', [Validators.required, Validators.pattern(/^yes$/i)]]
    });
  }

  get f() {
    return this.crackersForm.controls;
  }

  onSubmit() {
    if (this.crackersForm.valid) {
      alert('Cracker order submitted successfully!');
      console.log(this.crackersForm.value);
      this.crackersForm.reset();

    }
  }
   Done():void {
     // ✅ Call service method after submit
      this.diwaliService.serviceMethod();

   }
}
