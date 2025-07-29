import { Component } from '@angular/core';
import { Child } from '../child/child';
import { BehaviourMessageServics } from '../behaviour-message-servics';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  parentMessage: string = "I am message from parent";
  latestMessage: string = '';

  constructor(private messageService: BehaviourMessageServics) {}

  method(): void {
    window.alert("I am parent message");
  }

  // Called when a child emits
  onNotify(message: string) {
    console.log(message);
    window.alert("I have received a message from Child");
  }

  // Send a new message via BehaviorSubject
  sendToService(): void {
    this.messageService.updateMessage(this.parentMessage);
  }

  // Subscribe to the latest shared message
  ngOnInit(): void {
    this.messageService.currentMessage.subscribe(msg => {
      this.latestMessage = msg;
      console.log('Parent received from service:', msg);
    });
  }
}
