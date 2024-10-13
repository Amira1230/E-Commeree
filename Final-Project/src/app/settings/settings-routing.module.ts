import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { InfoComponent } from './Components/info/info.component';
import { SettingsMainComponent } from './Components/settings-main/settings-main.component';

const routes: Routes = [
  { path: '', component: SettingsMainComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'Info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
