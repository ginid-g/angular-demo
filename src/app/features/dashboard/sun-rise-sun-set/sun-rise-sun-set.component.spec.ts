import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRiseSunSetComponent } from './sun-rise-sun-set.component';

describe('SunRiseSunSetComponent', () => {
  let component: SunRiseSunSetComponent;
  let fixture: ComponentFixture<SunRiseSunSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunRiseSunSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunRiseSunSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
