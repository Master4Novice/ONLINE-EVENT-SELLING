import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShopComponent } from './events-shop.component';

describe('EventsShopComponent', () => {
  let component: EventsShopComponent;
  let fixture: ComponentFixture<EventsShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
