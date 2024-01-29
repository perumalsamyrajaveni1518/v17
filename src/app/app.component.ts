import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = "Test"
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get("/json/8.8.8.8").subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
    this.http.get("/json/8.8.8.8?fields=status,message,query,country,city").subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
  }
}
