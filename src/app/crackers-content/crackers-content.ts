import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crackers-content',
  imports: [ RouterLink , RouterOutlet ],
  standalone:true,
  templateUrl: './crackers-content.html',
  styleUrl: './crackers-content.css'
})
export class CrackersContent {

  playVideo(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const video = card.querySelector('.hover-video') as HTMLVideoElement;
  if (video) video.play();
}

pauseVideo(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const video = card.querySelector('.hover-video') as HTMLVideoElement;
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}


}
