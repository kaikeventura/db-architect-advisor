import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LucideAngularModule, ArrowRight, Check, Disc, Circle, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle, Zap, Box, BrainCircuit, Github, Columns } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({
      ArrowRight, Check, Disc, Circle, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle, Zap, Box, BrainCircuit, Github, Columns
    }))
  ]
};
