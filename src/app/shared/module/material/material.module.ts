import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






let materialArr = [ MatProgressSpinnerModule,MatCardModule,MatIconModule,MatDialogModule,MatSidenavModule,MatListModule,MatToolbarModule,MatButtonModule,DialogModule]
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,...materialArr
  ],exports : [...materialArr]
})
export class MaterialModule { }
