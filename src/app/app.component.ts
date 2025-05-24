import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PlanosSectionComponent } from "./components/planos-section/planos-section.component";
import { ContactSectionComponent } from "./components/contact-section/contact-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, PlanosSectionComponent, ContactSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plano-odontologico';
}
