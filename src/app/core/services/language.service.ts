import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLang = signal<string>('en');

    constructor(private translate: TranslateService) {
        this.initLanguage();
    }

    private initLanguage() {
        const savedLang = localStorage.getItem('app_lang');
        const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'

        // Priority: Saved > Browser > Default (en)
        const targetLang = savedLang || (browserLang === 'pt' ? 'pt' : 'en');

        this.setLanguage(targetLang);
    }

    setLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLang.set(lang);
        localStorage.setItem('app_lang', lang);
        document.documentElement.lang = lang;
    }

    toggleLanguage() {
        const newLang = this.currentLang() === 'en' ? 'pt' : 'en';
        this.setLanguage(newLang);
    }
}
