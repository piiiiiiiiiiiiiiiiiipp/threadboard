import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { ToastrModule } from 'ngx-toastr';
// import { TokenInterceptor } from './token-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(
      NgxWebstorageModule.forRoot(), 
      // TokenInterceptor,
      // NgxsResetPluginModule.forRoot(),
      // // devtools always last
      // NgxsReduxDevtoolsPluginModule.forRoot()
      ToastrModule,
    ),provideHttpClient(),
    provideAngularSvgIcon() ,
  
  ],
};
