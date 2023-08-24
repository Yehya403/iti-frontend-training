import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  skills = [
    { name: 'Java', progress: 90 },
    { name: 'Kotlin', progress: 85 },
    { name: 'HTML/CSS', progress: 70 },
    { name: 'JavaScript', progress: 75 },
    { name: 'Python', progress: 65},
    { name: 'SQL', progress: 80 },
    { name: 'Git', progress: 85 },

  ];

}
