import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.css']
})
export class UniversityCardComponent implements OnInit, OnChanges {

  universities:any=[];
 

  @Input() countryName:string='';
  @Input() facultyName:string='';

  emptyData:boolean = true;

  constructor(private dataService:DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getUniversityList(this.countryName,this.facultyName);
  }

  ngOnInit(): void {
    this.getUniversityList(this.countryName,this.facultyName);
  }

  getUniversityList(countryName:string,facultyName:string){

    if(this.countryName ==='' && this.facultyName==='' ){

    }else{
      this.dataService.fetchUniversityData(countryName,facultyName).subscribe({
        next:(data)=> {console.log(data);
          this.universities = data
          if(this.universities.length > 0){
            
            this.emptyData = false
          }
        },
      })
    }
  }

  goToWebsite(weblink:string){
    console.log('weblink',weblink[0])
    //window.location.href = weblink[0]
    window.open(weblink[0], "_blank");
  }

}
