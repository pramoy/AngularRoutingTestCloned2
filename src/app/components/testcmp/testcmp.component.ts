import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcmp',
  templateUrl: './testcmp.component.html',
  styleUrls: ['./testcmp.component.sass']
})
export class TestcmpComponent implements OnInit {

  constructor() { }
  test = 'ggg ';
  testArray=['a',',b','c'];
  ngOnInit(): void {
  }

}
