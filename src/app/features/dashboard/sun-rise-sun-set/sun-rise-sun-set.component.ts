import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  SunRiseSunSetService,
  SunriseSunsetResults,
} from './sun-rise-sun-set.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SunRiseSunSetReportComponent } from './sun-rise-sun-set-report/sun-rise-sun-set-report.component';

@Component({
  selector: 'app-sun-rise-sun-set',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SunRiseSunSetReportComponent,
  ],
  templateUrl: './sun-rise-sun-set.component.html',
  styleUrl: './sun-rise-sun-set.component.scss',
  providers: [SunRiseSunSetService],
})
export class SunRiseSunSetComponent {
  sunriseForm: FormGroup;
  loading = false;

  constructor(
    private sunRiseSunSetService: SunRiseSunSetService,
    private formBuilder: FormBuilder
  ) {
    this.sunriseForm = this.formBuilder.group({
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  getData() {
    if (this.sunriseForm.valid) {
      // Set loading to true while fetching data
      this.loading = true;

      // Handle form submission here
      const formData = this.sunriseForm.value;

      // Call the service method
      this.sunRiseSunSetService
        .getSunriseSunset(formData.latitude, formData.longitude, formData.date)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe();
    }
  }
}
