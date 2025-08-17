import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../service/post.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ipost } from '../../module/module';
import { tick } from '@angular/core/testing';
import { LoderService } from '../../service/loder.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {

  idEdit: boolean = false
  postform !: FormGroup

  postId !: string
  postObj !: Ipost

  constructor(private _postser: PostService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _loder: LoderService


  ) { }

  ngOnInit(): void {
    this.creatform()
    this._route.params
      .subscribe(res => {
        this.postId = res['id']
        console.log(this.postId);
        if (this.postId) {
          this.idEdit = true
          this._postser.fetchPostUrl(this.postId)
            .subscribe(data => {
              this.postObj = data;
              this.postform.patchValue(this.postObj)
              this._loder.loding$.next(false)
            })

        }

      })


  }

  creatform() {
    this.postform = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])
    })
  }

  Onform() {
    if (this.postform.valid) {
      let val = this.postform.value;
      console.log(val);
      this._postser.Addpost(val)
        .subscribe(res => {
          console.log(res);
          this.postform.reset()
          this._router.navigate(['posts'])

        })

    }

  }

  UpdatPost() {
    if (this.postform.valid) {

      let val2: Ipost = { ...this.postform.value, id: this.postId }
      this._postser.updatePost(val2)
        .subscribe(res => {
          console.log(res);
          this._loder.loding$.next(false)
          this.postform.reset()
          this._router.navigate(['posts'])

        })



    }
  }



}
