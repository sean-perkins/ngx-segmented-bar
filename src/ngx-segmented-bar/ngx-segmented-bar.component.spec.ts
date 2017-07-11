/* ts-lint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSegmentedBarComponent } from './ngx-segmented-bar.component';

describe('NgxSegmentedBarComponent', () => {
    let component: NgxSegmentedBarComponent;
    let fixture: ComponentFixture<NgxSegmentedBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NgxSegmentedBarComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxSegmentedBarComponent);
        component = fixture.componentInstance;
    });

    it('should create the ngx-segmented-bar', () => {
        expect(component).toBeTruthy();
    });
});
