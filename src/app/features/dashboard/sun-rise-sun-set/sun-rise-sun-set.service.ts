import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface SunriseSunsetResults {
  sunrise: string;
  sunset: string;
  solar_noon: string;
  day_length: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
}

export interface SunriseSunsetResponse {
  results: SunriseSunsetResults;
  status: string;
  tzId: string;
}

@Injectable({
  providedIn: 'root',
})
export class SunRiseSunSetService {
  sunriseSunsetData: BehaviorSubject<undefined | SunriseSunsetResults> =
    new BehaviorSubject(this.getSavedSunriseSunset());

  constructor(private http: HttpClient) {}

  getSunriseSunset(
    latitude: number,
    longitude: number,
    date: string
  ): Observable<SunriseSunsetResponse> {
    const params = new HttpParams()
      .set('lat', latitude.toString())
      .set('lng', longitude.toString())
      .set('date', date)
      .set('formatted', '0');

    return this.http
      .get<SunriseSunsetResponse>('https://api.sunrise-sunset.org/json', {
        params,
      })
      .pipe(
        map((data) => {
          this.setSunriseSunset(data.results);
          return data;
        })
      );
  }

  setSunriseSunset(data: SunriseSunsetResults): void {
    localStorage.setItem('sunset', JSON.stringify(data));
    this.sunriseSunsetData.next(data);
  }

  getSavedSunriseSunset(): undefined | SunriseSunsetResults {
    const data = localStorage.getItem('sunset');

    if (!data) return undefined;
    return JSON.parse(data);
  }
}
