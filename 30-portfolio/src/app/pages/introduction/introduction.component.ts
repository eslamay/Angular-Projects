import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
greetingText: string = 'Hello! My name is';
fullName: string = 'John Doe';
roleText: string = 'I build solftware engineer';
introductionText: string = `I'm a software developer focused on creating exceptional digital experiences. 
                              Passionate about everything related to technology, I create user-friendly and efficient applications. 
                              I love tackling complex problems and delivering high-quality work.`;

aboutMeButtonText: string = 'About Me';

  constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/about-me']);
  }
}
