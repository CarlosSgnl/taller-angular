// tslint:disable no-inferrable-types

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  async delete(method: string, parameters: object){
    try {
      const headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const httpOptions: object = {
        headers,
        params: parameters,
      };

      const url = `${this.apiUrl}/${method}`;

      const result: object = await this.httpClient.delete(url, httpOptions).toPromise();

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async get(method: string, parameters: object){
    try {
      const headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const httpOptions: object = {
        headers,
        params: parameters,
      };

      const url = `${this.apiUrl}/${method}`;

      const result: object = await this.httpClient.get(url, httpOptions).toPromise();

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async post(method: string, parameters: object, payload: object){
    try {
      const headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const httpOptions: object = {
        headers,
        params: parameters,
      };

      const url = `${this.apiUrl}/${method}`;

      const result: object = await this.httpClient.post(url, payload, httpOptions).toPromise();

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async patch(method: string, parameters: object, payload: object){
    try {
      const headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      const httpOptions: object = {
        headers,
        params: parameters,
      };

      const url = `${this.apiUrl}/${method}`;

      const result: object = await this.httpClient.patch(url, payload, httpOptions).toPromise();

      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
