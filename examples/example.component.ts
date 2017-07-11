import { Component } from '@angular/core';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: []
})
export class ExampleComponent {

    segmentedBarItems: any[] = [
        {
            title: 'Test 1'
        },
        {
            title: 'Test 2'
        }
    ];

    onSegmentedItemChange($event) {
        console.log('changed', $event);
    }

}
