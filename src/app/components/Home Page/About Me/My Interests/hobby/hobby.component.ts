import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent {

  @Input() bootstrapIconClass = ''
  @Input() text = ''

}
