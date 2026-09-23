import { Component } from '@angular/core';

interface CaseStudy {
  number: string;
  context: string;
  title: string;
  challenge: string;
  contribution: string;
  stack: string;
}

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {

    protected readonly caseStudies: CaseStudy[] = [
    {
      number: '01',
      context: 'Financial services',
      title: 'Modernizing an accounting platform',
      challenge: 'An aging accounting system needed a scalable path forward and a delivery model that could carry the work from concept to production.',
      contribution: 'Architected the SPA, established engineering standards, led a cross-functional team, and partnered with business and security stakeholders.',
      stack: 'Angular · .NET REST APIs · SQL Server · Azure DevOps',
    },
    {
      number: '02',
      context: 'Public sector',
      title: 'A pragmatic path from legacy to modern',
      challenge: 'A mature .NET Framework application needed modernization without losing focus on secure, usable delivery.',
      contribution: 'Guided the move to .NET Core and EF Core, established the React foundation, and shaped a JWT-enabled REST API architecture.',
      stack: 'React · Angular · .NET Core · EF Core · REST · JWT',
    },
    {
      number: '03',
      context: 'Fitness technology',
      title: 'Turning product requirements into a working platform',
      challenge: 'A fitness-industry product needed clear translation from business requirements into a maintainable web application.',
      contribution: 'Architected and developed the application while partnering with product ownership on scope, deliverables, and timelines.',
      stack: 'Angular · .NET Core · REST APIs · Bootstrap · SQL Server',
    },
  ];
}
