import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BehaviourMessageServics } from '../behaviour-message-servics';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnInit {
  @Input() message!: string;
  @Input() message2!: () => void;

  @Output() notify = new EventEmitter<string>();

  serviceMessage: string = '';

  constructor(private messageService: BehaviourMessageServics) {}

  ngOnInit(): void {
    this.messageService.currentMessage.subscribe(msg => {
      this.serviceMessage = msg;
    });
  }

  sendMessage() {
    this.notify.emit('message from child is it is working ');
  }

  childmethod(): void {
    window.alert('i am child method , behavioursubject ');
  }

  siblingcommunication(): void {
    window.alert('sibling communication is done by service , u have completed servica already behavioursubject');
  }
}
