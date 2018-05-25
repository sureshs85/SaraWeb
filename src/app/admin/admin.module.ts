import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms'
// import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AdminAppComponent } from './admin-app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '', component: AdminAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
    // FlexLayoutModule
  ],
  declarations: [SidebarComponent, ToolbarComponent, MainContentComponent, AdminAppComponent, NotesComponent, SalesComponent],
  providers: [UserService]
})
export class AdminModule { }
