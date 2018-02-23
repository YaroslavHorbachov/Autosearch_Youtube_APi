import { Component, OnInit } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html'
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    const headers: Headers = new Headers({'Access-Control-Allow-Origin': 'http://localhost:4200'});
    const opts: RequestOptions = new RequestOptions({headers: headers});
    this.http.get('http://cist.nure.ua/ias/app/tt/P_API_PODR_JSON', opts)
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}
