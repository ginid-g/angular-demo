import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRiseSunSetReportComponent } from './sun-rise-sun-set-report.component';

describe('SunRiseSunSetReportComponent', () => {
  let component: SunRiseSunSetReportComponent;
  let fixture: ComponentFixture<SunRiseSunSetReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunRiseSunSetReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunRiseSunSetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
