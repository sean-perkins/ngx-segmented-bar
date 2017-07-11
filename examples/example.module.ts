import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgxSegmentedBarModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgxSegmentedBarModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
