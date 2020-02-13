import { Directive, ElementRef, HostListener, Input, HostBinding, Renderer2, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Directive({
    selector: '[appCopy]'
})
export class CopyDirective {


    private element: ElementRef
    constructor(_element: ElementRef, private renderer: Renderer2, private translateService: TranslateService) {
        this.element = _element
    }

    @HostBinding("class") elementClass = "noselect"
    @HostListener("dblclick", ["$event"]) clickToCopy(event: MouseEvent) {

        this.element.nativeElement.style.background = "lightgreen"
        const textArea = document.createElement("textarea")
        textArea.textContent = this.element.nativeElement.innerText;
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy") // copy to clipboard the relevant selected DOM element 

        const translationResult = this.translateService.translateText("arabic", this.element.nativeElement.innerText)

        const copiedElement = this.renderer.createElement("span");
        const textElement = this.renderer.createText(translationResult)


        this.renderer.addClass(copiedElement, "copied")
        copiedElement.style.left = event.clientX
        copiedElement.style.top = event.clientY

        this.renderer.appendChild(copiedElement, textElement);
        this.renderer.appendChild(this.element.nativeElement, copiedElement);// insert copy span to the DOM

        setTimeout(() => {
            this.element.nativeElement.style.background = "none"
            this.renderer.removeChild(this.element.nativeElement, copiedElement)
        }, 1000);



        document.body.removeChild(textArea); //cleanup





    }

}
