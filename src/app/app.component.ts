import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'BeerFinder';
  shrinkStatus = false;
  entry = "";
  entryStatus = false;
  public zip;
  

  searchZip(zip){
    console.log(zip)
    this.entry = this.zip
    return this.entryStatus = !this.entryStatus, this.entry = this.zip, this.zip = "";
    
  }

  shrink(){
    if(this.shrinkStatus === false){
      return this.shrinkStatus = !this.shrinkStatus
    }else{
      return this.shrinkStatus
    }
  }
  isShrunkCheck(){
    if(this.shrinkStatus === true){
      return this.shrinkStatus = !this.shrinkStatus
    }else{
      return this.shrinkStatus
    }
  }

}
