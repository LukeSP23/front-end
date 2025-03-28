import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  photos: string =
    'https://www.google.com/imgres?q=google%20logo&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F1200px-Google_2015_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_logo&docid=YYcJ4Dx_qJL9iM&tbnid=Rhh4SLPFYhjujM&vet=12ahUKEwio8NfGvaaMAxVQmYkEHZ4rOesQM3oECBUQAA..i&w=1200&h=406&hcb=2&ved=2ahUKEwio8NfGvaaMAxVQmYkEHZ4rOesQM3oECBUQAA';


}
