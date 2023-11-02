import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'https://graph.microsoft.com/v1.0/me/todo/lists/AQMkADAwATMwMAItODI3Ni1kMDlkLTAwAi0wMAoALgAAA7gjC1Pb4bJHrhRfcwZQuBgBAMct_wAAAHNISoyQWq2hkobTAASa9MwsAAAA/tasks';

  constructor(
    private http:HttpClient,
  ) { }

  createTodoItem(title: String, token: String) {
    var header = {
      headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${token}`)
      .set('Content-Type',  `application/json`)
    };
    return this.http.post(`${this.baseUrl}`, `{"title":"${title}"}`, header);
  }

}
