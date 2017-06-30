import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'challenge', pathMatch: 'full' },
  {
    path: 'challenge', loadChildren: './+todo-challenge#TodoChallengeModule',
    data: { title: 'The Challenge!' }
  }
];
