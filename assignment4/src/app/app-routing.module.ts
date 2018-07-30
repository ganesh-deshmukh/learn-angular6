import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrosoftRouteComponent } from './microsoft-route/microsoft-route.component';
import { JavaRouteComponent } from './java-route/java-route.component';
import { PythonComponentComponent } from './python-component/python-component.component';
import { IndexRouteComponent } from './index-route/index-route.component';

const routes: Routes = [
    // each contains object and path
  {
    path:'', component: IndexRouteComponent,
  },
  {
    path:'microsoft', component: MicrosoftRouteComponent,
  },
  {
    path:'java', component: JavaRouteComponent,
  },
  {
    path:'python', component: PythonComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MicrosoftRouteComponent, JavaRouteComponent, PythonComponentComponent, IndexRouteComponent]
