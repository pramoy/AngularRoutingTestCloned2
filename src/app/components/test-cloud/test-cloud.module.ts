import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { TestCloudRoutingModule } from './test-cloud-routing.module';
import { TestCloudComponent } from './test-cloud.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

NgModule({
  declarations: [TestCloudComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    TestCloudRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
})
export class TestCloudModule { }
