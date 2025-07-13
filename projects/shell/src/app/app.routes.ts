import { loadRemoteModule } from '@angular-architects/module-federation'
import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'cadastro',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component'
      }).then(m => m.AppComponent)
  },
  {
    path: 'sucesso',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component'
      }).then(m => m.AppComponent)
  },
  { path: '**', redirectTo: 'cadastro', pathMatch: 'full' }
]

