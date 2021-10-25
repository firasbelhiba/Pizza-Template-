import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { BlogComponent } from './core/blog/blog.component';
import { ContactComponent } from './core/contact/contact.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { MenuComponent } from './core/menu/menu.component';
import { PizzasComponent } from './core/pizzas/pizzas.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'pizzas', component: PizzasComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
