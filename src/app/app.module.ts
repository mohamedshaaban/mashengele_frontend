import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './components/property/property.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  {path: 'property', component:PropertyComponent},
  {path: 'property/edit/:id', component:PropertyEditComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    NavbarComponent,
    PropertyEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
