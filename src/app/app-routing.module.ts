import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pairs',
    pathMatch: 'full'
  },
  {
    component: ContentLayoutComponent,
    path: 'pairs',
    loadChildren: () => import('./features/pairs/pairs.module').then(m => m.PairsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
