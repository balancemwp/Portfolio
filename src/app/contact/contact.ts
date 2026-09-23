import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 
  protected readonly email = 'martin@shapeconsulting.com';
  protected readonly linkedIn = 'https://www.linkedin.com/in/shapeconsulting/';
    protected readonly github = 'https://github.com/balancemwp/';

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
