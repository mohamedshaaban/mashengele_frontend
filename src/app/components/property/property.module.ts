import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PropertyComponent } from './property.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    // component: PropertyComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  // declarations: [PropertyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PropertyModule { }
