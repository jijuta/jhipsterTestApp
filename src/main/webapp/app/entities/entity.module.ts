import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterTestAppRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterTestAppCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterTestAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterTestAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterTestAppTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterTestAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterTestAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterTestAppJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterTestAppRegionMySuffixModule,
        JhipsterTestAppCountryMySuffixModule,
        JhipsterTestAppLocationMySuffixModule,
        JhipsterTestAppDepartmentMySuffixModule,
        JhipsterTestAppTaskMySuffixModule,
        JhipsterTestAppEmployeeMySuffixModule,
        JhipsterTestAppJobMySuffixModule,
        JhipsterTestAppJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTestAppEntityModule {}
