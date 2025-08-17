import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Ipost } from '../../module/module';
import { LoderService } from '../../service/loder.service';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
 
  postInfom !: Ipost[]

  constructor(private _postserv : PostService ,
              private _loderser : LoderService
  ) { }

  ngOnInit(): void {
    this._postserv.fetChAllpost()
    .subscribe(res=>{
      this.postInfom = res
      // loder stop
      this._loderser.loding$.next(false)

    })

  }

}
