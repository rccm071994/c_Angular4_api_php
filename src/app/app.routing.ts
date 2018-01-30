import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { ProductosListComponent } from './component/productos-list/productos-list.component';
import { ProductoAddComponent } from './component/producto-add/producto-add.component';
import { ProductoDetailComponent } from './component/producto-detail/producto-detail.component';
import { ProductoEditComponent } from './component/producto-edit/producto-edit.component';





const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'productos',component: ProductosListComponent},
    {path:'nuevo',component: ProductoAddComponent},
    {path: 'producto/:id', component: ProductoDetailComponent},
    {path: 'editar-producto/:id', component: ProductoEditComponent},
    {path:'**',component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);