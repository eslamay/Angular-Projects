import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-filter-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './dynamic-filter-list.component.html',
  styleUrl: './dynamic-filter-list.component.scss'
})
export class DynamicFilterListComponent {
searchText:string='';
items: string[] = [
    'Angular Tutorial',
    'React Tutorial',
    'Vue.js Tutorial',
    'JavaScript Basics',
    'TypeScript Fundamentals',
    'Building with HTML & CSS',
    'Introduction to Node.js',
    'Getting Started with MongoDB',
    'Web Development with Node.js',
    'Advanced JavaScript Concepts',
    'Mastering Angular',
    'Learning CSS Grid',
    'Node.js for Beginners',
    'The Complete JavaScript Guide',
    'CSS Flexbox in Depth',
    'Getting Started with Express.js',
    'Deep Dive into GraphQL',
    'Modern Web Development Trends',
    'Building REST APIs with Express',
    'Introduction to Git and GitHub',
    'Web Accessibility Essentials',
  ];

get filteredItems(): string[] {
    return this.items.filter(item =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
