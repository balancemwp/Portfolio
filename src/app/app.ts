import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Experience {
  period: string;
  organization: string;
  role: string;
  summary: string;
  technologies: string[];
}

interface CaseStudy {
  number: string;
  context: string;
  title: string;
  challenge: string;
  contribution: string;
  stack: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly email = 'martin@shapeconsulting.com';
  protected readonly phone = '804.201.1302';

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

  protected readonly experience: Experience[] = [
    {
      period: 'Oct 2021 — Aug 2026',
      organization: 'Fidelity National Financial',
      role: 'Technical Team Lead / IT Consultant',
      summary: 'Led architecture, engineering, and delivery of a modern platform replacing an aging accounting system. Built and led a nine-member cross-functional team, established standards and CI/CD, and partnered with business and security teams through production delivery.',
      technologies: ['Angular', '.NET', 'REST APIs', 'SQL Server', 'Azure DevOps', 'Agile / Scrum'],
    },
    {
      period: 'Jul 2020 — Oct 2021',
      organization: 'Evolver Inc.',
      role: 'Technical Team Lead',
      summary: 'Led three developers delivering a React, Angular, and .NET Core application for the U.S. Senate. Modernized a .NET Framework application, shaped REST API architecture, and mentored the team through delivery.',
      technologies: ['React', 'Angular', '.NET Core', 'EF Core', 'JWT', 'Azure DevOps'],
    },
    {
      period: 'Jan 2020 — Jul 2020',
      organization: 'Shape Consulting',
      role: 'Senior Software Engineer',
      summary: 'Architected and developed a web application for the fitness industry, translating product requirements into technical deliverables and timelines.',
      technologies: ['Angular', '.NET Core', 'REST APIs', 'Bootstrap', 'SQL Server'],
    },
    {
      period: 'Nov 2019 — Dec 2019',
      organization: 'WestCary Group',
      role: 'Senior Software Engineer / IT Consultant',
      summary: 'Modernized application services by extracting business functionality into Node.js REST APIs and assisted with AWS configuration and deployment.',
      technologies: ['Node.js', 'REST APIs', 'AWS'],
    },
    {
      period: 'Sep 2019 — Nov 2019',
      organization: 'Total Party Planner',
      role: 'Senior Software Engineer / IT Consultant',
      summary: 'Designed and developed a configurable reporting utility and worked directly with stakeholders to translate reporting requirements into software functionality.',
      technologies: ['Reporting', 'Data integration', 'Stakeholder collaboration'],
    },
    {
      period: 'Feb 2018 — Jul 2019',
      organization: 'CarMax',
      role: 'Senior Software Engineer / IT Consultant',
      summary: 'Served as Senior Developer / Architect on a large enterprise Angular application, contributing to refactoring and modernization while mentoring developers.',
      technologies: ['Angular', 'Application modernization', 'Architecture'],
    },
    {
      period: 'Nov 2016 — Jan 2018',
      organization: 'Acendre',
      role: 'Technical Team Lead / IT Consultant',
      summary: 'Led a software development team, shaped the technical roadmap, guided Azure implementation and deployment, and presented application and data-migration strategies.',
      technologies: ['Microsoft Azure', 'Technical roadmaps', 'Data migration', 'Team leadership'],
    },
  ];

  protected readonly earlierExperience =
    'Senior Software Engineer, Consultant, Developer, and Programmer/Analyst roles supporting government, financial services, insurance, healthcare, and commercial organizations from 1998–2016.';

  protected form = {
    name: '',
    email: '',
    opportunity: '',
    message: '',
  };

  protected submitContact(form: { valid: boolean | null }): void {
    if (form.valid !== true) {
      return;
    }

    const subject = encodeURIComponent(`Contract inquiry from ${this.form.name}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\nOpportunity type: ${this.form.opportunity}\n\n${this.form.message}`,
    );
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }
}
