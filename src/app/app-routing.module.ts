import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { StudentsListComponent } from './studentslist/studentsList.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'addstudent' },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'editstudent/:id', component: EditstudentComponent },
  { path: 'studentslist', component: StudentsListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
