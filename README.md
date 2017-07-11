# ngx-segmented-bar

[![npm](https://img.shields.io/npm/v/ngx-segmented-bar.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-segmented-bar)
[![npm](https://img.shields.io/npm/dt/ngx-segmented-bar.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-segmented-bar)


Simplistic segmented bars (button groups) in Angular.

1. `npm i ngx-segmented-bar --s`
2. Add `NgxSegmentedBarModule` to your feature module.
```
import { NgxSegmentedBarModule } from 'ngx-segmented-bar';

...
imports: [
    NgxSegmentedBarModule
]
...
```

## Usage

```html
<ngx-segmented-bar [items]="segmentedBarItems" (selectedIndexChange)="onSegmentedItemChange($event)"></ngx-segmented-bar>
```

```javascript
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
```

## Contributors

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
