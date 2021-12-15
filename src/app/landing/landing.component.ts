import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var divolte;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToHome() {
    divolte.signal("clickThrough", {"param": '/home'})
    this.router.navigate(['home']);
  }
}
