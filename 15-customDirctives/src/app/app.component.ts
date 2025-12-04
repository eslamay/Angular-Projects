import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FocusOnDirective } from './dirctives/focus-on.directive';
import { ClickOutsideDirective } from './dirctives/click-outside.directive';
import { TextTransformDirective } from './dirctives/text-transform.directive';
import { HoverHighlightDirective } from './dirctives/hover-highlight.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FocusOnDirective, ClickOutsideDirective, TextTransformDirective, HoverHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'customDirctives';
}
