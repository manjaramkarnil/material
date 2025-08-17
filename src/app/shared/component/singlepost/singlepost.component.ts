import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../module/module';
import { PostService } from '../../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tick } from '@angular/core/testing';
import { LoderService } from '../../service/loder.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDilogComponent } from '../mat-dilog/mat-dilog.component';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {
  
  postId !: string
  postObj !: Ipost 

  constructor(private _route : ActivatedRoute,
    private _postserv : PostService,
     
    private _loderser : LoderService,
    private _matdilog : MatDialog,
    private _router : Router
    

  ) { }

  ngOnInit(): void {
    this._route.params
    .subscribe(res=>{
      this.postId = res['id']
      if(this.postId){
        this._postserv.fetchPostUrl(this.postId)
        .subscribe(res=>{
          this.postObj = res

          //hide loder
          this._loderser.loding$.next(false)
          
        })
        
      }
    })

 
  }

  remove(){
    const dilogconf = this._matdilog.open(MatDilogComponent)

    dilogconf.afterClosed()
    .subscribe(flag=>{
      if(flag){
        this._postserv.removePost(this.postObj)
        .subscribe(res=>{
          console.log(res);
          this._router.navigate(['posts'])
          
        })
      }else{

      }
    })

  }

  
}



