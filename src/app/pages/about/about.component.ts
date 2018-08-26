import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  elections: any;

  constructor(private http: Http) { }

  getData() {
    this.http
      .get('https://www.googleapis.com/civicinfo/v2/elections', { params: { key: 'API-KEY' } })
      .subscribe(response => {
        
        let data = response.json();
        console.log(data);
        
        this.elections = data.elections;
        
        
      })
  }

  ngOnInit() {
  }

}
