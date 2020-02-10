import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appResize]'
})
export class ResizeDirective {
    @Input() initialSize: string
    private element: ElementRef;
    constructor(_element: ElementRef) {
        this.element = _element
        console.log(_element.nativeElement.style.fontSize)
    }

    ngOnInit() {
        this.element.nativeElement.style.fontSize = this.initialSize
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.changeSize("60px")
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.changeSize("40px")
    }


    changeSize(size: String) {
        this.element.nativeElement.style.fontSize = size;
    }



}
