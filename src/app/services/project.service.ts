import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interface.ts/interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3000/projects'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

 
}
