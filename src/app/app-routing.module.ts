import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add', component: AddComponent},
  { path: 'delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
