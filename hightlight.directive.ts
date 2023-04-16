import { Directive,Renderer2,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }
@Input() set appHightlight(condition:boolean){
this.renderer.addClass(this.element.nativeElement,'highlight')
}
}
