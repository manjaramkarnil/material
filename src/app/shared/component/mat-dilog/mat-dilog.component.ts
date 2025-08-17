import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dilog',
  templateUrl: './mat-dilog.component.html',
  styleUrls: ['./mat-dilog.component.scss']
})
export class MatDilogComponent implements OnInit {

  constructor( private _dilogref : MatDialogRef<MatDilogComponent>) { }

  ngOnInit(): void {
  }

  onconform(flag : boolean){
     this._dilogref.close(flag)
  }
}
