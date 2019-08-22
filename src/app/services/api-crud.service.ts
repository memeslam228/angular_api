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

  post(titlE: string, completeD: boolean, userID: string) {
    return this.http.post(
      urlRoot,
      {title: titlE, completed: completeD, userId: userID},
      {observe: 'response'});
  }

  patch(id: string, titlE: string, completeD: boolean, userID: string) {
    return this.http.patch(
      urlRoot + '/' + id,
      {title: titlE, completed: completeD, userId: userID},
      {observe: 'response'});
  }

  delete(id: string) {
    return this.http.delete(urlRoot + '/' + id, {observe: 'response'});
  }

}
