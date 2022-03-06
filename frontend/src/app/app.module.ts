import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { CreateComponent } from './phonebook/create/create.component';
import { PhonebooklistComponent } from './phonebook/phonebooklist/phonebooklist.component';
import { ContactsListComponent } from './contact/contacts-list/contacts-list.component';
import { SaveContactComponent } from './contact/save-contact/save-contact.component';
import { PhonebookService } from './services/phonebook.service';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HelpComponent } from './home/help/help.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    PhonebooklistComponent,
    ContactsListComponent,
    SaveContactComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    PhonebookService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
