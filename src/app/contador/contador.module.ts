import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class ContadorModule {}