import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-services',
  imports: [ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/contact']);
  }
}
