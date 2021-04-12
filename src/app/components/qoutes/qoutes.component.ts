import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.scss'],
})
export class QoutesComponent implements OnInit {
  qoute1 = {
    text: `"Our greatest weakness lies in giving up. The most certain way
  to succeed is always to try just one more time."`,
    author: `- Thomas A. Edison`,
  };
  qoute2 = {
    text: `"Success is no accident. It is hard work, perseverance,
  learning, studying, sacrifice and most of all, love of what
  you are doing or learning to do."`,
    author: `- Pele`,
  };
  qoute3 = {
    text: `"Failure is only the opportunity to begin again, this time
  more intelligently."`,
    author: `- Mary Anne Radmacher`,
  };

  qouteArray: any[] = [this.qoute1, this.qoute2, this.qoute3];
  constructor() {}

  ngOnInit(): void {}
}
