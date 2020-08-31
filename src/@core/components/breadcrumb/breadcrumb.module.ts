import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,

    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,

    TranslateModule,

    FuseSharedModule
  ],
  exports: [BreadcrumbComponent],
  providers: []
})
export class BreadcrumbModule { }
