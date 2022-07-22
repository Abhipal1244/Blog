import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @Input() item: any;
  @Output() child: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  view(val: any,v:any) {
   

    this.child.emit({title:val, dec: v, mode:'view' });

  }

 

}
