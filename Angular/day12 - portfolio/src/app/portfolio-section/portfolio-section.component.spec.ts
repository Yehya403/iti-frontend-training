import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionComponent } from './portfolio-section.component';

describe('PortfolioSectionComponent', () => {
  let component: PortfolioSectionComponent;
  let fixture: ComponentFixture<PortfolioSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSectionComponent]
    });
    fixture = TestBed.createComponent(PortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
