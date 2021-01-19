import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.scss']
})
export class BeerlistComponent implements OnInit {

  @Input() toChild;
  @Input() fetchData : boolean;

 public data;
 lengthOfData;
 dataResponse = false;

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onFetchData(this.toChild)
  }
  onFetchData(toChild){
    this.http.get(`https://api.openbrewerydb.org/breweries/search?query=${toChild}&sort=-name`)
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
}
