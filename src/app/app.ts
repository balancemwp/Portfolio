import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { ProofStrip } from './proof-strip/proof-strip';
import { Hero } from './hero/hero';
import { About } from './about/about';

import { Work } from './work/work';
import { Expertise } from './expertise/expertise';
import { Experience } from './experience/experience';
import { Leadership } from './leadership/leadership';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Footer, Contact, ProofStrip, Hero, About, Experience, Work, Expertise, Leadership],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @HostBinding('class.light-theme')
  protected isLightMode = localStorage.getItem('portfolio-theme') !== 'dark';

  // protected readonly email = 'martin@shapeconsulting.com';
  // protected readonly phone = '804.201.1302';
  // protected readonly linkedIn = 'https://www.linkedin.com/in/shapeconsulting/';


  protected toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    localStorage.setItem('portfolio-theme', this.isLightMode ? 'light' : 'dark');
  }

  

  
}
