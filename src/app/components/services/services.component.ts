
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
   
  }
}
