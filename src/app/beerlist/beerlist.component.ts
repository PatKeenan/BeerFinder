import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, HostListener } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.scss'],
})

export class BeerlistComponent implements OnInit {
  /* Takes the input from the appcomponent as a paramater */
  @Input() toChild;
  @Input() fetchData : boolean;


  /* fetch the data */
  constructor(private http: HttpClient, ) { }

  /* Variables for getting the Data from the API */

  dataResponse = false;
  public data;
  lengthOfData;

  /*------- End of Variables For Api Function -------*/

  onFetchData(toChild){
    this.http.get(`https://api.openbrewerydb.org/breweries/search?query=${toChild}`)
   /*  this.http.get('https://api.openbrewerydb.org/breweries/search?query=new_jersey') */
    .pipe(map(responseData => {
      const data = [];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
          data.push({ ...responseData[key], id: key});
        }
      }
      return data;
    })
    )
    .subscribe(brews => {
      if(brews.length >= 1){
        this.dataResponse = true
        return this.data = brews, this.lengthOfData = brews.length
      }else{
        return this.data = "Nothing to show here";
      }
    })
  }
  /*------- End Of Fetch See ngOnInit Below -------*/
  
  /* Scroll to top functionality */

  /* Variable for scroll to top */

  showBackToTop = false;

/* End of Variables */

  isFarFromTop(){
    const position = window.scrollY + window.innerHeight;
    if(position > 2000){
      return this.showBackToTop = true;
    }else{
      return this.showBackToTop = false;
    }
  }

  @HostListener('window:scroll', ['$event']) 
  scrolled(event: any): void {
      this.isFarFromTop();
  }
  sendBackUp(){
    window.scrollTo(0, 0)
  }

   /*------- End Scroll to top functionality -------*/

  /* Fetch the data on load */

  ngOnInit(): void {
    this.onFetchData(this.toChild)
  }



}
