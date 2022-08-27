import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false;
  isContained = false;
  dropdownMenu: ElementRef;
  @HostListener('document:click', ['$event']) onClick(event) {
   const childNodes =this.elRef.nativeElement.childNodes;
   const len: number =this.elRef.nativeElement.childNodes.length;
   for(let counter = 0; counter < len; counter++) {
    const className: string = "" + childNodes[counter]?.className;
    if (className.includes("dropdown-menu")) {
      this.dropdownMenu = childNodes[counter];
      break;
    }
   }
   this.isContained = this.elRef.nativeElement.contains(event.target)
   if(this.elRef.nativeElement.contains(event.target)) {
     this.toggleDropdown(this.isOpen, this.isContained)
    } else {
      this.toggleDropdown(true, false)
    }

 }
constructor(private elRef: ElementRef, private renderer: Renderer2) {}

toggleDropdown (isOpen: boolean, isContained: boolean) {
    if (!this.isOpen && isContained) {
    this.renderer.addClass(this.dropdownMenu, 'open')
    this.isOpen = true;
    } else  if(isOpen && isContained) {
      this.isOpen = false;
      this.renderer.removeClass(this.dropdownMenu, 'open')
    } else {
      this.isOpen = false;
      this.renderer.removeClass(this.dropdownMenu, 'open')
    }
  }

}
