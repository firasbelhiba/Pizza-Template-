import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactComponent } from './core/contact/contact.component';
import { BlogComponent } from './core/blog/blog.component';
import { PizzasModule } from './core/pizzas/pizzas.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutUsComponent, ContactComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule , PizzasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
