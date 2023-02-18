import { NgModule } from '@angular/core';

import { DuoToneDirective       } from './fontawesome_duotone.ts';
import { HideActionBarDirective } from '../directives/actionbar.hide.directive';

/*
    All the directives we want should be listed and imported here
    All the others - free to remove
*/

@NgModule({
  imports: [],
  declarations: [
    DuoToneDirective,
    HideActionBarDirective
  ],
  exports: [
    DuoToneDirective,
    HideActionBarDirective
  ]
})
export class DirectivesModule {}


