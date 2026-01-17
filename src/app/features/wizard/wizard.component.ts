import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireInput } from '../../core/models/database.model';
import { LucideAngularModule, ArrowRight, Check, Disc, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle } from 'lucide-angular';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

interface Question {
    id: number;
    title: string;
    description: string;
    key: keyof QuestionnaireInput;
    options: { label: string; value: any; icon?: string; desc?: string; examples?: string }[];
}

@Component({
    selector: 'app-wizard',
    standalone: true,
    imports: [
        CommonModule,
        LucideAngularModule,
        TranslateModule,
        TranslatePipe
    ],
    providers: [],
    templateUrl: './wizard.component.html',
    styles: []
})
export class WizardComponent {
    @Output() complete = new EventEmitter<QuestionnaireInput>();

    currentStep = signal(0);
    answers = signal<Partial<QuestionnaireInput>>({});

    questions: Question[] = [
        {
            id: 1,
            title: 'WIZARD.Q_CAP.TITLE',
            description: 'WIZARD.Q_CAP.DESC',
            key: 'consistencyPreference',
            options: [
                {
                    label: 'WIZARD.Q_CAP.OPT_CONSISTENCY.LABEL',
                    value: 'Strong',
                    icon: 'lock',
                    desc: 'WIZARD.Q_CAP.OPT_CONSISTENCY.DESC'
                },
                {
                    label: 'WIZARD.Q_CAP.OPT_AVAILABILITY.LABEL',
                    value: 'Eventual',
                    icon: 'activity',
                    desc: 'WIZARD.Q_CAP.OPT_AVAILABILITY.DESC'
                }
            ]
        },
        {
            id: 2,
            title: 'WIZARD.Q_STRUCTURE.TITLE',
            description: 'WIZARD.Q_STRUCTURE.DESC',
            key: 'dataStructure',
            options: [
                { label: 'WIZARD.Q_STRUCTURE.OPT_RELATIONAL.LABEL', value: 'Relational', icon: 'table', examples: 'WIZARD.Q_STRUCTURE.OPT_RELATIONAL.EXAMPLES' },
                { label: 'WIZARD.Q_STRUCTURE.OPT_DOCUMENT.LABEL', value: 'Document', icon: 'file-json', examples: 'WIZARD.Q_STRUCTURE.OPT_DOCUMENT.EXAMPLES' },
                { label: 'WIZARD.Q_STRUCTURE.OPT_KEYVALUE.LABEL', value: 'Key-Value', icon: 'zap', examples: 'WIZARD.Q_STRUCTURE.OPT_KEYVALUE.EXAMPLES' },
                { label: 'WIZARD.Q_STRUCTURE.OPT_VECTOR.LABEL', value: 'Vector', icon: 'brain-circuit', examples: 'WIZARD.Q_STRUCTURE.OPT_VECTOR.EXAMPLES' },
                { label: 'WIZARD.Q_STRUCTURE.OPT_GRAPH.LABEL', value: 'Graph', icon: 'share-2', examples: 'WIZARD.Q_STRUCTURE.OPT_GRAPH.EXAMPLES' },
                { label: 'WIZARD.Q_STRUCTURE.OPT_WIDECOLUMN.LABEL', value: 'Wide-Column', icon: 'columns', examples: 'WIZARD.Q_STRUCTURE.OPT_WIDECOLUMN.EXAMPLES' },
                { label: 'WIZARD.Q_STRUCTURE.OPT_SEARCH.LABEL', value: 'Search Engine', icon: 'search', examples: 'WIZARD.Q_STRUCTURE.OPT_SEARCH.EXAMPLES' }
            ]
        },
        {
            id: 3,
            title: 'WIZARD.Q_PACELC.TITLE',
            description: 'WIZARD.Q_PACELC.DESC',
            key: 'latencySensitivity',
            options: [
                { label: 'WIZARD.Q_PACELC.OPT_LATENCY.LABEL', value: 'High', desc: 'WIZARD.Q_PACELC.OPT_LATENCY.DESC' },
                { label: 'WIZARD.Q_PACELC.OPT_CONSISTENCY.LABEL', value: 'Low', desc: 'WIZARD.Q_PACELC.OPT_CONSISTENCY.DESC' }
            ]
        },
        {
            id: 4,
            title: 'WIZARD.Q_BUDGET.TITLE',
            description: 'WIZARD.Q_BUDGET.DESC',
            key: 'budget',
            options: [
                { label: 'WIZARD.Q_BUDGET.OPT_LOW', value: 'Low' },
                { label: 'WIZARD.Q_BUDGET.OPT_MEDIUM', value: 'Medium' },
                { label: 'WIZARD.Q_BUDGET.OPT_HIGH', value: 'High' }
            ]
        }
    ];

    selectOption(key: keyof QuestionnaireInput, value: any) {
        this.answers.update(current => ({ ...current, [key]: value }));
        setTimeout(() => {
            this.nextStep();
        }, 300);
    }

    nextStep() {
        if (this.currentStep() < this.questions.length - 1) {
            this.currentStep.update(v => v + 1);
        } else {
            this.finish();
        }
    }

    finish() {
        const finalAnswers = this.answers() as QuestionnaireInput;
        finalAnswers.partitionTolerance = true;
        this.complete.emit(finalAnswers);
    }

    get progress() {
        return ((this.currentStep() + 1) / this.questions.length) * 100;
    }
}
