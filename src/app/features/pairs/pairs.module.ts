import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PairsRoutingModule } from './pairs-routing.module';
import { PairsListComponent } from './components/pairs-list/pairs-list.component';
import { PairsDetailsComponent } from './components/pairs-details/pairs-details.component';


@NgModule({
  declarations: [
    PairsListComponent,
    PairsDetailsComponent
  ],
  imports: [
    CommonModule,
    PairsRoutingModule
  ]
})
export class PairsModule { }
