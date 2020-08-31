import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Resource } from '@core/types/resource';

import { environment } from 'environments/environment';

@Injectable()
export abstract class GenericWebApiService<T extends Resource> {

  private BASE_URL: string;
  private VERSION: string;

  protected endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.BASE_URL = environment.api.base_url;
    this.VERSION = environment.api.version;
  }

  create(data: T, options = {}): Observable<T> {

    const baseurl = options['base_url'] || this.BASE_URL;
    const version = options['version'] || this.VERSION;

    return this.httpClient
      .post(`${baseurl}/${version}/${this.endpoint}`, data)
      .pipe(map( response => response as T));
  }

  update(data: T, options = {}): Observable<T> {

    const baseurl = options['base_url'] || this.BASE_URL;
    const version = options['version'] || this.VERSION;

    return this.httpClient
      .put(`${baseurl}/${version}/${this.endpoint}/${data.id}`, data)
      .pipe(map( response => response as T));
  }

  read(id: string, options = {}): Observable<T> {

    const baseurl = options['base_url'] || this.BASE_URL;
    const version = options['version'] || this.VERSION;

    return this.httpClient
      .get(`${baseurl}/${version}/${this.endpoint}/${id}`)
      .pipe(map((response: any) => response as T));
  }

  list(query: any, options: {}): Observable<T[]> {
    
    const baseurl = options['base_url'] || this.BASE_URL;
    const version = options['version'] || this.VERSION;
    const params = new HttpParams();

    Object.keys(query).forEach( param => params.set(param, query[param]));

    return this.httpClient
      .get(`${baseurl}/${version}/${this.endpoint}`, { params })
      .pipe(map((response: any) => response.map((item: any) => item as T)));
  }

  delete(id: string, options= {}): Observable<T> {    

    const baseurl = options['base_url'] || this.BASE_URL;
    const version = options['version'] || this.VERSION;

    return this.httpClient
      .delete(`${baseurl}/${version}/${this.endpoint}/${id}`)
      .pipe(map(response => response as T));
  }

}
