import { Component } from '@angular/core';
import { CatFactComponent } from './cat-fact/cat-fact.component';
import { SunRiseSunSetComponent } from './sun-rise-sun-set/sun-rise-sun-set.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CatFactComponent, SunRiseSunSetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
