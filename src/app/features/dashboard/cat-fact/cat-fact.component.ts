import { Component, OnInit } from '@angular/core';
import { CatFactService } from './cat-fact.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cat-fact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.scss',
  providers: [CatFactService],
})
export class CatFactComponent implements OnInit {
  fact: string = '';
  constructor(private catFactService: CatFactService) {}

  ngOnInit(): void {
    this.catFactService.getFacts().subscribe((result) => {
      this.fact = result.fact;
    });
  }
}
