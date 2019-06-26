import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './web/web.component';
import { DigitalComponent } from './digital/digital.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';





const App: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'web', component: WebComponent },
  { path: 'digital', component: DigitalComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(App, {useHash: true})
  ],
  declarations: []
})

export class AppRouterModule {}
