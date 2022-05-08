import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'wt-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
    console.log();
    // Subscribe on store isLoading and
  }

}
