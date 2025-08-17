import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../module/module';
import { LoderService } from './loder.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl  = `${environment.bastUrl}/post.json`

  constructor(private _http : HttpClient ,
            private _loderser : LoderService

  ) { }

  fetChAllpost() :Observable<Array<Ipost>>{


    const heders = new HttpHeaders({
    'Contetn-type' : 'qazxdfg',
    'Athorization' : 'JWT token'
  })
    //loder start 
       this._loderser.loding$.next(true)
    return this._http.get<Ipost>(this.postUrl,{
      headers : heders
    })
   .pipe(
     delay(500),
    map((obj:any)=>{
      let postArr = []
      for (const key in obj){
        postArr.push({...obj[key],id:key})
       
      }
      return postArr.reverse()
      
    })
   )
  }
 
  fetchPostUrl(id :string) :Observable<Ipost>{
    // start Loder
    this._loderser.loding$.next(true)

    let fetchId = `${environment.bastUrl}/post/${id}.json`
    return this._http.get<Ipost>(fetchId)
    
  }

 Addpost(obj : Ipost) : Observable<Ipost>{
  const heders = new HttpHeaders({
    'Contetn-type' : 'qazxdfg',
    'Athorization' : 'JWT token'
  })
 return this._http.post<Ipost>(this.postUrl,obj,{
      headers : heders
  })
       
 }

 updatePost(updateobj : Ipost):Observable<Ipost>{
   this._loderser.loding$.next(true)
  let UpdateUrl = `${environment.bastUrl}/post/${updateobj.id}.json`
  return this._http.patch<Ipost>(UpdateUrl,updateobj)

 }

 removePost(obj : Ipost):Observable<Ipost>{
  let removeUrl = `${environment.bastUrl}/post/${obj.id}.json`;
  return this._http.delete<Ipost>(removeUrl)

 }

 

}
