import { Component } from '@angular/core';

interface Experience {
  period: string;
  organization: string;
  role: string;
  summary: string;
  technologies: string[];
}

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css',
})

export class Expertise {

    protected readonly expertise = [
    {
      label: 'Architecture & leadership',
      items: ['Technical strategy', 'Solution design', 'Team leadership', 'Mentoring', 'Design patterns', 'Code quality'],
    },
    {
      label: 'Product engineering',
      items: ['Angular', 'React', 'TypeScript', 'C# / .NET', 'REST APIs', 'Node.js'],
    },
    {
      label: 'Cloud & delivery',
      items: ['Microsoft Azure', 'AWS', 'Azure DevOps', 'CI/CD', 'Git', 'Application deployment'],
    },
    {
      label: 'Data & collaboration',
      items: ['SQL Server', 'Entity Framework', 'SSIS / SSRS', 'Agile / Scrum', 'Stakeholder management', 'Security collaboration'],
    },
  ];

}
