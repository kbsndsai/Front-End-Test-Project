import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { VizComponent } from './viz/viz.component';
import { EditInfoComponent } from './edit-info/edit-info.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'info', component: InfoComponent},  
  {path: 'about', component: AboutComponent},
  {path: 'edit-info', component: EditInfoComponent},
  {path: 'viz', component: VizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
