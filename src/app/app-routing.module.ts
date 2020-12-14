import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingModule } from "./components/login/login-routing.module";
import { TestCloudRoutingModule } from "./components/test-cloud/test-cloud-routing.module";
import { TestcmpComponent } from './components/testcmp/testcmp.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login-routing.module')
      .then(d => d.LoginRoutingModule)
  },
  {
    path: 'test-cloud',
    loadChildren: () => import('./components/test-cloud/test-cloud-routing.module')
      .then(d => d.TestCloudRoutingModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core-routing.module')
      .then(d => d.CoreRoutingModule)
  },{
    path: 'testcmp',
    // loadChildren: () => import('./components/testcmp/testcmp.component')
    //   .then(d => d.TestcmpComponent)
    component:TestcmpComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
