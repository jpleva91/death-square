import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TurretComponent } from './turret/turret.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

@NgModule({
  declarations: [
    AppComponent,
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent,
    TieFighterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
