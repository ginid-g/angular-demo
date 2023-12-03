import { Component, OnInit } from '@angular/core';
import {
  SunRiseSunSetService,
  SunriseSunsetResults,
} from '../sun-rise-sun-set.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sun-rise-sun-set-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sun-rise-sun-set-report.component.html',
  styleUrl: './sun-rise-sun-set-report.component.scss',
})
export class SunRiseSunSetReportComponent implements OnInit {
  sunriseData: SunriseSunsetResults | undefined;

  constructor(private sunRiseSunSetService: SunRiseSunSetService) {}

  ngOnInit(): void {
    this.sunRiseSunSetService.sunriseSunsetData.subscribe((result) => {
      this.sunriseData = result;
    });
  }
}
