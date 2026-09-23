import { Component } from '@angular/core';

interface iExperience {
  period: string;
  organization: string;
  role: string;
  summary: string;
  technologies: string[];
}


@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

    protected readonly experience: iExperience[] = [
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
}
