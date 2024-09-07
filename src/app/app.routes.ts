import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { ServicesComponent } from './components/services/services.component';
import { AddprojectsComponent } from './components/addprojects/addprojects.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'contact',component:ContactsComponent},
{path:'about',component:AboutUsComponent},
{path:'project',component:ProjectsComponent},
{path:'services',component:ServicesComponent},
{path:'add-project',component:AddprojectsComponent},
{path:'project-list',component:ProductListComponent}
];
