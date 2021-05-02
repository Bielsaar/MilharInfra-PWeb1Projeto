import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {FirebaseConfig} from "../../../firebase.config";
import {AngularFireModule} from "@angular/fire";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase)
  ]
})
export class FirestoreModule { }
