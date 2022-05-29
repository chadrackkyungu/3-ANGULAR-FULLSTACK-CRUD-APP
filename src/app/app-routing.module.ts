import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate:[AuthGuard] //protect my route
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'products', 
    component: ProductsComponent, 
    canActivate:[AuthGuard]
  },
  {
    path: 'products-details/:id', 
    component: ProductDetailsComponent, 
    canActivate:[AuthGuard]
  },
  {
    path: '', 
    redirectTo:'login', 
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
