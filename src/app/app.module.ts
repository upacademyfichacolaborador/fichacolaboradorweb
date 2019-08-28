import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { InvalidTokenComponent } from './invalid-token/invalid-token/invalid-token.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectModule } from 'ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormSuccessComponent } from './form-success/form-success.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    EmployeeformComponent,
    InvalidTokenComponent,
    FormSuccessComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    SelectModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}