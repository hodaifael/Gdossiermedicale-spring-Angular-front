import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddossierComponent } from './adddossier.component';

describe('AdddossierComponent', () => {
  let component: AdddossierComponent;
  let fixture: ComponentFixture<AdddossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
