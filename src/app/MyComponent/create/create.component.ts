import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';







@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() item: any;

  
  
  @Output() child: EventEmitter<any> = new EventEmitter();

  data: any[] = [];
 
  
  cap = '';
   
  cancel(val: string) {
    val = '';

  }
  post(val: any, v: any) {
   
    
    if (v.length < 150 || val.length < 1) {
      alert("Give proper Details title should not more than 20 word & description should more than 150 words")
    }
    else {
      this.cap = val;
     
      this.child.emit({ name: this.cap, dec: v, id: this.item });

     

    }

    
  }

  

  ngOnInit(): void {
  }
  

}
