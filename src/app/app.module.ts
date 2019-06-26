import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebComponent } from './web/web.component';
import { DigitalComponent } from './digital/digital.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AppRouterModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WebComponent,
    DigitalComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    AppRouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
