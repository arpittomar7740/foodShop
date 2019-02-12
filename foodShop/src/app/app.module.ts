import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import 'hammerjs';
import { DishDetailsComponent } from './components/dish-details/dish-details.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDialogModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    DishDetailsComponent,
    HeaderComponent,
    LoginDialogComponent,
    routingComponents,
    ContactComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [LoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
