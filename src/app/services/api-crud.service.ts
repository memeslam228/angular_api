import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const urlRoot = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})

export class ApiCrudService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(urlRoot, {observe: 'response'});
  }

  post() {

  }

  patch() {

  }

  delete() {

  }

}
