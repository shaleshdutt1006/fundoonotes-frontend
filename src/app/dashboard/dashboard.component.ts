import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  PasswordFormControl = new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
  ]);

  getErrorMessage(control: FormControl, fieldName: string): string {
    if (control.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (control.hasError('email')) {
      return 'Invalid email address';
    }
    if (control.hasError('pattern')) {
      return `Password should be 8-30 characters long and contain at least one digit, one lowercase letter and one uppercase letter`;
    }
    return '';
  }


}
