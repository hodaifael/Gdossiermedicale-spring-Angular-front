import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpatienComponent } from './listpatien.component';

describe('ListpatienComponent', () => {
  let component: ListpatienComponent;
  let fixture: ComponentFixture<ListpatienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpatienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
