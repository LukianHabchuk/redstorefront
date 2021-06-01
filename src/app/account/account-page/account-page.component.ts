import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  message: string;
  loginStyle: string;
  regStyle: string;
  indicator: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    this.regStyle = 'transform: translateX(300px)';
    this.loginStyle = 'transform: translateX(300px)';
    this.indicator = 'transform: translateX(0px)';
  }

  register(): void {
    this.regStyle = 'transform: translateX(0px)';
    this.loginStyle = 'transform: translateX(0px)';
    this.indicator = 'transform: translateX(100px)';
  }
}
