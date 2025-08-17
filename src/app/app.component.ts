import { Component, OnInit } from '@angular/core';
import { LoderService } from './shared/service/loder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material';
  isLoding !: boolean 

  constructor( private _lodingser : LoderService){}

  ngOnInit(): void {
    this._lodingser.loding$
    .subscribe(res=>{
      this.isLoding = res

    })
    
  }
}
