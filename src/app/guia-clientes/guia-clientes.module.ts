import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuiaRoutes } from './guia-clientes.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GuiaRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [

  ]
})
export class GuiaClientesModule { }
