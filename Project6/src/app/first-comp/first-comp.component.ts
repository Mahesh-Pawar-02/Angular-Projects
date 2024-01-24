import { Component } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [SecondCompComponent],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {

}
