import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent {

  @Input() skillText = ''
  @Input() experienceInYears = 0

  calculatePercentageFill = () => Math.min(this.experienceInYears * 10, 100)

}
