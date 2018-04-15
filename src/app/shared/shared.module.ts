import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from "@angular/forms";

import { ClickAndStopDirective } from './click-and-stop.directive';
import { ScrollDetectDirective } from './scroll-detect.directive';
import { FieldComponent } from "./field/field.component";
import {SortPipe} from "./sort.pipe";
import { TimeAgoPipe } from './time-ago.pipe';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommonModule, FieldComponent, SortPipe, ClickAndStopDirective, ScrollDetectDirective, TimeAgoPipe, ReactiveFormsModule, FieldErrorComponent],
  declarations: [FieldComponent, SortPipe, ClickAndStopDirective, ScrollDetectDirective, TimeAgoPipe, FieldErrorComponent]
})
export class SharedModule { }
