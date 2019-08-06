import { NgModule, ModuleWithProviders } from '@angular/core';
import { CredentialsApiService } from './services/credentials/credentials-api.service';




@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CredentialsApiService
      ]
    };
  }
 }
