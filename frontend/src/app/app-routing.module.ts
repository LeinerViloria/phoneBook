import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contact/contacts-list/contacts-list.component';
import { SaveContactComponent } from './contact/save-contact/save-contact.component';
import { CreateComponent } from './phonebook/create/create.component';
import { PhonebooklistComponent } from './phonebook/phonebooklist/phonebooklist.component';

const routes: Routes = [
  {
    path:'',
    component:PhonebooklistComponent
  },
  {
    path:'phoneBookList',
    component:PhonebooklistComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'saveContact',
    component:SaveContactComponent
  },
  {
    path:'contactList',
    component:ContactsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
