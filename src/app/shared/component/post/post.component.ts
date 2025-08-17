import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../module/module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() getpost ! : Ipost
  constructor() { }

  ngOnInit(): void {
  }

}
