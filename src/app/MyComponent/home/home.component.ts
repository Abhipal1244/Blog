import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() item: any;
  @Output() child: EventEmitter<any> = new EventEmitter();

  bntStyle: string;
  constructor() {

    this.bntStyle = 'btn-default';
  }

  ngOnInit(): void {
  }
  view(val: any, v: any) {
    this.child.emit({ title: val, dec: v, mode: 'view' });
    

  }

}
