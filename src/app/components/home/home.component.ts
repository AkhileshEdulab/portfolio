import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,SkillsComponent,ProjectsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }
}
