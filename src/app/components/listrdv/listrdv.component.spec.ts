import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrdvComponent } from './listrdv.component';

describe('ListrdvComponent', () => {
  let component: ListrdvComponent;
  let fixture: ComponentFixture<ListrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
