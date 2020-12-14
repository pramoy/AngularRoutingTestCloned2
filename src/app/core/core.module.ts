import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';


@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]   
})
export class CoreModule { }
