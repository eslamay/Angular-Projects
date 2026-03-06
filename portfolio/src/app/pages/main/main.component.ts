import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ServicesComponent } from "../services/services.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { IntroductionComponent } from "../introduction/introduction.component";

@Component({
  selector: 'app-main',
  imports: [ContactComponent, ServicesComponent, PortfolioComponent, AboutMeComponent, IntroductionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
