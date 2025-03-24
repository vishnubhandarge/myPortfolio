import { Component } from '@angular/core';

@Component({
  selector: 'app-backend-projects',
  templateUrl: './backend-projects.component.html',
  styleUrls: ['./backend-projects.component.css']
})
export class BackendProjectsComponent {
  backendProjects = [
    { title: 'Project 1', heading: 'Heading 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', heading: 'Heading 2', description: 'Description 2', link: '#' },
    { title: 'Project 3', heading: 'Heading 3', description: 'Description 3', link: '#' }
  ];
}