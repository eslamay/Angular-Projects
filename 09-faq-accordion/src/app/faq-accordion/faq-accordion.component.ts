import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faqAccordionAnimation } from './faq-accordion.animation';

@Component({
  selector: 'app-faq-accordion',
  imports: [CommonModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
  animations: [faqAccordionAnimation.slideToggle],
})
export class FaqAccordionComponent {
openIndex: number | null = null;

  faqs = [

    {

      question: 'What is Angular?',

      answer:

        'Angular is a platform for building mobile and desktop web applications.',

    },

    {

      question: 'What is a component in Angular?',

      answer:

        'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',

    },

    {

      question: 'What are Angular directives?',

      answer:

        'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',

    },

  ];

  toggle(index: number): void {

    this.openIndex = this.openIndex === index ? null : index;

  }
}
