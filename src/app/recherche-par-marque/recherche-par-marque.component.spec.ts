import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParMarqueComponent } from './recherche-par-marque.component';

describe('RechercheParMarqueComponent', () => {
  let component: RechercheParMarqueComponent;
  let fixture: ComponentFixture<RechercheParMarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParMarqueComponent]
    });
    fixture = TestBed.createComponent(RechercheParMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
