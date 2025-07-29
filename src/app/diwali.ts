import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Diwali {

  constructor() {}

  serviceMethod() {
    // This will display the message in a popup
    window.alert("🎉 Thank you and successfully visit again!\nHappy Diwali for your loved ones! 🎇");
  }

  addressmethod(){
    window.alert("You Can Call Me ANY TIME , I will be Availabel and i can help you . 😊");
  }

  lastComponent(){
     window.alert("Call me REY, Don't think too much , I am a Kind Person 😊");
  }
}
