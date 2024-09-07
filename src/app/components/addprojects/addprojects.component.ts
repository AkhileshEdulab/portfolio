import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interface.ts/interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addprojects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addprojects.component.html',
  styleUrl: './addprojects.component.css'
})
export class AddprojectsComponent {

  project: Project = {
    name: '',
    description: '',
    imageUrl: '',
    githubUrl:''
  };

  constructor(private projectService: ProjectService) {}

  onSubmit(): void {
    if (this.project.name && this.project.description) {
      this.projectService.addProject(this.project).subscribe({
        next: () => {
          this.resetForm();
          alert('Project added successfully!');
        },
        error: (err) => {
          console.error('Error adding project', err);
        }
      });
    }
  }

  resetForm(): void {
    this.project = {
      name: '',
      description: '',
      imageUrl: '',
      githubUrl:''
    };
  }


}



  