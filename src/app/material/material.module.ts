import {NgModule} from '@angular/core';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MaterialComponents = [
    MatButtonModule,
    MatButtonToggleModule
];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {

}
