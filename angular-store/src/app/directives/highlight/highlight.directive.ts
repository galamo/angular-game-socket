import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @Input() highlightColor: string
    private element: ElementRef
    constructor(_element: ElementRef) {
        this.element = _element
    }

    ngOnInit(): void {
        console.log(this.highlightColor)
        this.element.nativeElement.style.color = this.highlightColor
    }

}



