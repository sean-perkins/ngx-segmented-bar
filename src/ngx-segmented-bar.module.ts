import { NgxSegmentedBarComponent } from './ngx-segmented-bar/ngx-segmented-bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        NgxSegmentedBarComponent
    ],
    exports: [
        NgxSegmentedBarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NgxSegmentedBarModule {
    static forRoot() {
        return {
            ngModule: NgxSegmentedBarModule,
            providers: []
        };
    }
}
