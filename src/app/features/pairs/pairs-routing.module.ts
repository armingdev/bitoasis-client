import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PairsListComponent} from "./components/pairs-list/pairs-list.component";
import {PairsDetailsComponent} from "./components/pairs-details/pairs-details.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PairsListComponent
  },
  {
    path: 'pair/:symbol',
    component: PairsDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PairsRoutingModule { }
