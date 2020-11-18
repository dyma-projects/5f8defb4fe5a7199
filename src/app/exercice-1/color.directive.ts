import { HostListener } from '@angular/core';
import { ElementRef, Directive } from '@angular/core';


@Directive({
    selector: '[color]'
})
export class ColorDirective {

    constructor (private el: ElementRef) {
        el.nativeElement.style.color = 'black';
    }

    @HostListener('window:keydown', ['$event']) windowArrowKey($event) {


        switch ($event.code) {
            case "ArrowLeft":
                // Left pressed
                this.el.nativeElement.style.color = 'red';
                break;
            case "ArrowRight":
                // Right pressed
                this.el.nativeElement.style.color = 'blue';
                break;
            case "ArrowUp":
                // Up pressed
                this.el.nativeElement.style.color = 'green';
                break;
            case "ArrowDown":
                // Down pressed
                this.el.nativeElement.style.color = 'yellow';
                break;
        }
    }
}