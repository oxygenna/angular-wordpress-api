import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule { }
