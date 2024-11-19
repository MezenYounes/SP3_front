import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparnomComponent } from './rechercheparnom.component';

describe('RechercheparnomComponent', () => {
  let component: RechercheparnomComponent;
  let fixture: ComponentFixture<RechercheparnomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheparnomComponent]
    });
    fixture = TestBed.createComponent(RechercheparnomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
