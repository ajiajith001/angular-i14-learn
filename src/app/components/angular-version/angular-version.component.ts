import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-angular-version',
  templateUrl: './angular-version.component.html',
  styleUrls: ['./angular-version.component.css'],
})
export class AngularVersionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  version = `${VERSION.major}.${VERSION.minor}.${VERSION.patch}`;
}
