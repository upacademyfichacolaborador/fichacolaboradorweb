import { NgModule, ModuleWithProviders } from '@angular/core';
import { CredentialsApiService } from './services/credentials/credentials-api.service';
import { DataService } from './services/data/data.service';
import { EmployeeApiService } from './services/employee/employee-api.service';





@NgModule({  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CredentialsApiService,
        DataService,
        EmployeeApiService
      ]
    };
  }
 }
