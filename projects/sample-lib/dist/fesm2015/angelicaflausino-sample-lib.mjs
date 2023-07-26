import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class SampleLibService {
    constructor() { }
}
SampleLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SampleLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SampleLibComponent {
}
SampleLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SampleLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SampleLibComponent, selector: "lib-sample-lib", ngImport: i0, template: `
    <p>
      sample-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sample-lib', template: `
    <p>
      sample-lib works!
    </p>
  ` }]
        }] });

class SampleLibModule {
}
SampleLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SampleLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: SampleLibModule, declarations: [SampleLibComponent], exports: [SampleLibComponent] });
SampleLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SampleLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SampleLibComponent
                    ],
                    imports: [],
                    exports: [
                        SampleLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of sample-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SampleLibComponent, SampleLibModule, SampleLibService };
//# sourceMappingURL=angelicaflausino-sample-lib.mjs.map
