import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../interface.ts/interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (err) => {
        console.error('Error fetching projects', err);
      }
    });
  }

}
