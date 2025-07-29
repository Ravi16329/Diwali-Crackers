import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CapitalizePipe } from '../capitalize-pipe';
import { LowerCasePipe } from '@angular/common';
import { Highlight } from '../highlight';



@Component({
  selector: 'app-assignment2',
  imports: [ RouterLink ,  RouterModule , CapitalizePipe , LowerCasePipe , Highlight  ],
  standalone:true,
  templateUrl: './assignment2.html',
  styleUrl: './assignment2.css'
})
export class Assignment2 {

  myObservable: any;

  myPromise: any;

  create():void{
    this.myObservable=new Observable<string>(observer => {
      console.log("Observable has created ;");
      observer.next("Observable has emittted 1");
      observer.next("Observable has emittted 2");
      observer.next("Observable has emittted 3");

    })

    this.myPromise=new Promise<string>(resolve => {
       console.log("Promise has created ;")
       resolve("Promise has Emitted 1 ");
       resolve("Promise has Emitted  2 ");
       resolve("Promise has Emitted 3 ");


    })

  }

  execute(): void {
  this.myObservable.subscribe((data: string) => {
    console.log(data);
  });

  this.myPromise.then((data: string) => {
    console.log(data);
  });
}


  cancel():void{
    window.alert(" Promise Observable has Completed in my Assignment-2 ");
}

//Data Binding
//1
 name: string = 'Raveendra ( Interpolation )';

 //2  Property Binding
 imageUrl: string = 'https://www.shutterstock.com/image-photo/cat-looks-side-sits-on-600nw-1834094695.jpg';






}


