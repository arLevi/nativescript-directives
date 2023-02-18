import { Directive, ElementRef, OnInit } from "@angular/core";
import { Label } from "ui/label";

@Directive({
    selector: "[labelDuoTone]"
})
export class DuoToneDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    get nativeView(): Label {
        return this.el.nativeElement;
    }

    ngOnInit() {
        const nativeView = this.nativeView;

        if (nativeView instanceof Label) {
            nativeView.on(Label.loadedEvent, () => {
                let val = nativeView.text.codePointAt(0);
                // Check to see if this is already a valid unicode string above 0xffff.
                // If they fix the underlying issue in the future; we don't need to run the rest of the code...
                if (val > 65535) {
                    return;
                }

                // We found a character we need to change...
                val = val | 0x100000;
                nativeView.text = String.fromCodePoint(val);

            });
        }
    }
}


