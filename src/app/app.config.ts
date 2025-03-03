import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};
