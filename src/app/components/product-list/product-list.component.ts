import { Component, OnInit } from '@angular/core';
import { Project, } from '../../interface.ts/interface';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
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




