import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
 
}


  