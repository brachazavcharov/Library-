import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowerLIstComponent } from './borrower-list/borrower-list.component';
import { LendingsComponent } from './lendings/lendings.component';
import { AboutComponent } from './about/about.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ErrorComponent } from './error/error.component';
import { BorrowerFormComponent } from './borrower-form/borrower-form.component';
import { ManagementComponent } from './management/management.component';
import { LendingFormComponent } from './lending-form/lending-form.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';

const routes: Routes = [{
  path: "",
  component: BookListComponent
},
{
  path: "borrowers",
  component: BorrowerLIstComponent
},
{
  path: "books",
  component: BookListComponent
},
{
  path: "lendings",
  component: LendingsComponent
},
{
  path: "about",
  component: AboutComponent,
  children: [{
    path: "information",
    component: GeneralInformationComponent
  },
  {
    path: "rules",
    component: RulesComponent
  }, {
    path: "conact",
    component: ContactComponent
  },
  {
    path: "**",
    component: GeneralInformationComponent
  }
  ]
}, {
  path: "bookDetails/:id",
  component: BookDetailsComponent
}, {
  path: "toCategoryGroup/:id",
  component: BookListComponent
},
{
  path: "borrowerList",
  component: BorrowerFormComponent
}, {
  path: "managment",
  component: ManagementComponent,
  children: [{
    path: "addLending",
    component: LendingFormComponent
  }, {
    path: "addBook",
    component: AddBookFormComponent
  }]
},
{
  path: "**",
  component: ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
