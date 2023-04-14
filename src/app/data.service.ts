import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  fetchUniversityData(countryName: string, facultyName: string) {
    let searchParam = new HttpParams();

   // countryName !==''? searchParam = searchParam.append('country', countryName) : '';

    searchParam =searchParam.append('country', countryName);
    searchParam = searchParam.append('name', facultyName);
    return this.httpClient.get(
      'http://universities.hipolabs.com/search?',
      { params: searchParam }
    );
  }
}
