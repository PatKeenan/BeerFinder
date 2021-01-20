import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'BeerFinder';
  shrinkStatus = false;
  entry = "";
  fetchData = false
  public toChild;
  entryStatus = false;
  public zip ="";
  errorMessage = false;

  searchZip(zip){
    if(zip == "" || /^\s+|^\W/.test(zip)){
      return this.entry = "Please Enter A Valid Search", this.throwError();
    }else if( /^brewery|^micro|^planning|^brewpub|^\W/gi.test(zip.trim())){
      return this.entry = "Please Narrow Your Search", this.throwError();
    }
    else{
      if(this.entryStatus){
      return this.entryStatus = !this.entryStatus, this.entry = this.zip, this.toChild = this.zip,this.zip = "", this.fetchData = !this.fetchData, this.shrink();
    }
      return this.entryStatus = !this.entryStatus, this.entry = this.zip, this.toChild = this.zip, this.errorMessage = false, this.fetchData = !this.fetchData, this.shrink();
    }
    
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
  throwError(){
    if(this.errorMessage === false){
      return this.errorMessage = true, this.zip = "", setTimeout(()=>{return this.errorMessage = !this.errorMessage},2500 )
    }
  }

}
