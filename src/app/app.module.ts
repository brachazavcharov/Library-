import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowerLIstComponent } from './borrower-list/borrower-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LongNamePipe } from './pipes/long-name.pipe';
import { PresentBookPipe } from './pipes/present-book.pipe';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LendingsComponent } from './lendings/lendings.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { BorrowerFormComponent } from './borrower-form/borrower-form.component';
import { LendingFormComponent } from './lending-form/lending-form.component';
import { ManagementComponent } from './management/management.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { CategoryFormatterComponent } from './category-formatter/category-formatter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    BookDetailsComponent,
    BookListComponent,
    BorrowerLIstComponent,
    LongNamePipe,
    PresentBookPipe,
    MenuComponent,
    LendingsComponent,
    ErrorComponent,
    AboutComponent,
    SubMenuComponent,
    GeneralInformationComponent,
    RulesComponent,
    ContactComponent,
    BorrowerFormComponent,
    LendingFormComponent,
    ManagementComponent,
    AddBookFormComponent,
    CategoryFormatterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
