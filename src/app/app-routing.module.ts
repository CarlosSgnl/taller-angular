import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Pagina1Component } from './pagina1/pagina1.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'pagina-1',
    component: Pagina1Component
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
