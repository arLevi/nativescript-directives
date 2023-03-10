import { Directive } from '@angular/core';
import { Page } from '@nativescript/core';

/*
    Hiding the action bar in a page
*/

@Directive({
    selector: '[hideActionBar]'
})
export class HideActionBarDirective {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}


