import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoderService {
 loding$ : BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor() { }
}
