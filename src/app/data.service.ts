import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getUniversityData(searchText: string, type: string) {
    let searchParam = new HttpParams();
    searchParam = searchParam.append('s', searchText);
    searchParam = searchParam.append('type', type);
    return this.httpClient.get(
      'http://universities.hipolabs.com/search?name=science',
      { params: searchParam }
    );
  }
}
