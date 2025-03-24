import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface Project {
  title: string;
  heading: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  currentSection: string = '';
  showProjects: boolean = false;
  isDarkMode = false;

  constructor(private router: Router) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  ngOnInit() {
    // Get the current route and set the section
    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url.includes('frontend-projects')) {
        this.currentSection = 'frontend';
        this.showProjects = true;
      } else if (url.includes('mvc-projects')) {
        this.currentSection = 'mvc';
        this.showProjects = true;
      } else if (url.includes('backend-projects')) {
        this.currentSection = 'backend';
        this.showProjects = true;
      } else {
        this.currentSection = '';
        this.showProjects = false;
      }
    });

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.applyTheme();
    }
  }

  closeProjects() {
    this.showProjects = false;
    this.currentSection = '';
    this.router.navigate(['/']);
  }

  frontendProjects: Project[] = [
    {
      title: 'Portfolio Website',
      heading: 'Angular 18',
      description: 'A responsive portfolio website built with Angular 18 and Bootstrap 5.',
      link: '#',
      image: 'assets/images/portfolio.jpg'
    },
    {
      title: 'Task Manager',
      heading: 'Angular 17',
      description: 'A task management application with CRUD operations.',
      link: '#',
      image: 'assets/images/task-manager.jpg'
    }
  ];

  mvcProjects: Project[] = [
    {
      title: 'E-Commerce Platform',
      heading: 'ASP.NET Core MVC 8',
      description: 'Full-featured e-commerce platform with user authentication and admin panel.',
      link: '#',
      image: 'assets/images/ecommerce.jpg'
    },
    {
      title: 'Blog System',
      heading: 'ASP.NET Core MVC 6',
      description: 'A blog system with categories, tags, and comments functionality.',
      link: '#',
      image: 'assets/images/blog.jpg'
    }
  ];

  backendProjects: Project[] = [
    {
      title: 'RESTful API',
      heading: 'ASP.NET Core Web API 8',
      description: 'RESTful API with JWT authentication and Swagger documentation.',
      link: '#',
      image: 'assets/images/api.jpg'
    },
    {
      title: 'Microservices',
      heading: 'ASP.NET Core Web API 6',
      description: 'Microservices architecture with Docker and Azure deployment.',
      link: '#',
      image: 'assets/images/microservices.jpg'
    }
  ];

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
