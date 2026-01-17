import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { LucideAngularModule, ArrowRight, Check, Disc, Circle, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle, Zap, Box, BrainCircuit, Github, Columns, Smartphone, Globe, Cpu } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideTranslateService({
      defaultLanguage: 'en'
    }),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    }),
    importProvidersFrom(
      LucideAngularModule.pick({
        ArrowRight, Check, Disc, Circle, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle, Zap, Box, BrainCircuit, Github, Columns, Smartphone, Globe, Cpu
      })
    )
  ]
};
