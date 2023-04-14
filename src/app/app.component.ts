import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignUni';

  countryName:string ='';
  facultyName:string ='';
  searchUniversity(){
    console.log(this.countryName,this.facultyName)
  }
}
