import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatienComponent } from './add-patien.component';

describe('AddPatienComponent', () => {
  let component: AddPatienComponent;
  let fixture: ComponentFixture<AddPatienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
