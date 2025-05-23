import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosSectionComponent } from './planos-section.component';

describe('PlanosSectionComponent', () => {
  let component: PlanosSectionComponent;
  let fixture: ComponentFixture<PlanosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
