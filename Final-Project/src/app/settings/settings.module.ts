import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { InfoComponent } from './Components/info/info.component';
import { SettingsMainComponent } from './Components/settings-main/settings-main.component';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    InfoComponent,
    SettingsMainComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
