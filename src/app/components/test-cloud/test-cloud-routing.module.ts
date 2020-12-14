import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCloudComponent } from "./test-cloud.component";
const routes: Routes = [{ path: '', component: TestCloudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCloudRoutingModule { }
