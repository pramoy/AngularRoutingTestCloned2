import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.sass']
})
export class CoreComponent 
// implements OnInit 
{

  constructor() { }
  test = "gggg"
  testArray = ['a', ',b', 'c'];
  
  // ngOnInit(): void {
  // }

}
