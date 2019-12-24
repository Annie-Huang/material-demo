import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule
} from '@angular/material';

const Material = [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule
];

@NgModule({
    imports: [Material],
    exports: [Material]
})
export class MaterialModule {

}
