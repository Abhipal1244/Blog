import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
 
  title = 'BLOG';
  item = 'home';
 
 

  data: any = [];
  data1: any =[];
  constructor() {

  }
  Cre() {
    this.item = "Cre";
   
    
  }
  Mb() {
    this.item= "MB";
   
  }
  Home() {
    this.item ='home';
  

  }
  re(event: any) {

 
    this.data.push(event);
    
    
  }
  rec(event: any) {
    this.data1 = { title: event.title, desc: event.dec }
    this.item = event.mode;
  }
  red(event: any) {
    this.data1 = { title:event.title,desc:event.dec}
    this.item =event.mode;
  }
}
