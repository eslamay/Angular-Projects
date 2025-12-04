import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTransform]'
})
export class TextTransformDirective {
@Input() textTransform: 'uppercase' | 'lowercase' | 'capitalize' = 'uppercase';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private transformText(text:string){
       if(this.textTransform === 'uppercase'){
          this.renderer.setProperty(this.el.nativeElement, 'innerText', text.toUpperCase());
       }
       else if(this.textTransform === 'lowercase'){
          this.renderer.setProperty(this.el.nativeElement, 'innerText', text.toLowerCase());
       } 
       else if(this.textTransform === 'capitalize'){
          this.renderer.setProperty(this.el.nativeElement, 'innerText', text.charAt(0).toUpperCase() + text.slice(1));
       }
  } 

  ngOnInit() {
      const text = this.el.nativeElement.innerText;
      this.transformText(text);
  }
}
