import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    template: `
    <button 
      (click)="languageService.toggleLanguage()"
      class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all group backdrop-blur-sm"
      title="Switch Language">
      
      <i-lucide name="globe" class="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors"></i-lucide>
      
      <div class="flex items-center text-xs font-bold font-mono">
        <span [class.text-cyan-400]="languageService.currentLang() === 'en'" [class.text-slate-600]="languageService.currentLang() !== 'en'">EN</span>
        <span class="mx-1 text-slate-600">|</span>
        <span [class.text-cyan-400]="languageService.currentLang() === 'pt'" [class.text-slate-600]="languageService.currentLang() !== 'pt'">PT</span>
      </div>
    </button>
  `
})
export class LanguageSwitcherComponent {
    constructor(public languageService: LanguageService) { }
}
