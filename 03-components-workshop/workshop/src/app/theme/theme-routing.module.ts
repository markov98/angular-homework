import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'themes', children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: 'add', canActivate: [AuthActivate], component: AddThemeComponent },
      { path: ':themeId', component: CurrentThemeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
