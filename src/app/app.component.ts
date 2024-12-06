import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
}
