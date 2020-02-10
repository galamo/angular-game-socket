import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appResize]'
})
export class ResizeDirective implements OnInit {
    @Input() colori: string
    @Input() defaultSize: string
    public el: any


    @HostListener('mouseenter') onMouseEnter() {
        this.resize("50px");
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.resize("30px");
    }

    resize(size: string) {
        console.log(size)
        this.el.nativeElement.style.fontSize = size
    }

    constructor(element: ElementRef) {
        this.el = element;
    }

    ngOnInit() {
        this.el.nativeElement.style.color = this.colori
        this.el.nativeElement.style.fontSize = this.defaultSize
    }

}
