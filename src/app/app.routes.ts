import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lazy-example',
    loadComponent: () =>
      import('./example/example.component').then((m) => m.ExampleComponent),
  },
];
