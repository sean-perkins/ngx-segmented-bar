import {
    Component, Input, Output, EventEmitter
} from '@angular/core';

@Component({
    selector: 'ngx-segmented-bar',
    styleUrls: ['./ngx-segmented-bar.component.scss'],
    templateUrl: './ngx-segmented-bar.component.html'
})
export class NgxSegmentedBarComponent {

    private _items: any[];

    @Input() set items(items: any[]) {
        this._items = this.transformItems(items);
    }

    @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        let hasSelectedItem = false;
        if (this.items) {
            hasSelectedItem = this.items.filter(res => res.selected).length > 0;
            if (!hasSelectedItem && this.items.length > 0) {
                this.selectItem(this.items[0]);
            }
        }
    }

    selectSegmentedItem(item: any): void {
        if (this.items !== null) {
            this.items.map(res => {
                return this.selectItem(res, false);
            });
        }
        item = this.selectItem(item);
        this.selectedIndexChange.emit(item);
    }

    private selectItem(item: any, selected = true): any {
        if ('set' in item) {
            if (typeof item.set === 'function') {
                try {
                    item.set('selected', selected);
                    return (<any>Object).assign(item, {
                        selected: selected
                    });
                } catch (error) { }
            }
        }
        else {
            item.selected = selected;
            return item;
        }
    }

    transformItems(items: any[]): any[] {
        return items;
    }

    get items(): any[] {
        return this._items;
    }
}
