import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './features/wizard/wizard.component';
import { ResultsComponent } from './features/results';
import { QuestionnaireInput } from './core/models/database.model';
import { LucideAngularModule, Database, BrainCircuit, Github } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './core/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WizardComponent,
    ResultsComponent,
    LucideAngularModule,
    TranslateModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  showWizard = true;
  userAnswers?: QuestionnaireInput;

  onWizardComplete(answers: QuestionnaireInput) {
    this.userAnswers = answers;
    this.showWizard = false;
  }

  restart() {
    this.showWizard = true;
    this.userAnswers = undefined;
  }
}
