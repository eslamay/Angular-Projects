import { Component } from '@angular/core';
import { PwnedPasswordCheckerComponent } from "./components/pwned-password-checker/pwned-password-checker.component";
import { PasswordExplanationComponent } from "./components/password-explanation/password-explanation.component";
import { PasswordGeneratorComponent } from "./components/password-generator/password-generator.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [PwnedPasswordCheckerComponent, PasswordExplanationComponent, PasswordGeneratorComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'password-security';
}
