import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireInput } from '../../core/models/database.model';
import { LucideAngularModule, ArrowRight, Check, Disc, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle, ArrowUp, CheckCircle, Zap } from 'lucide-angular';
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
            title: 'WIZARD.Q_PARTITION.TITLE',
            description: 'WIZARD.Q_PARTITION.DESC',
            key: 'partitionStrategy',
            options: [
                {
                    label: 'WIZARD.Q_PARTITION.OPT_CONSISTENCY.LABEL',
                    value: 'Consistency',
                    icon: 'lock',
                    desc: 'WIZARD.Q_PARTITION.OPT_CONSISTENCY.DESC'
                },
                {
                    label: 'WIZARD.Q_PARTITION.OPT_AVAILABILITY.LABEL',
                    value: 'Availability',
                    icon: 'activity',
                    desc: 'WIZARD.Q_PARTITION.OPT_AVAILABILITY.DESC'
                }
            ]
        },
        {
            id: 2,
            title: 'WIZARD.Q_NORMAL_OP.TITLE',
            description: 'WIZARD.Q_NORMAL_OP.DESC',
            key: 'normalOperationPriority',
            options: [
                {
                    label: 'WIZARD.Q_NORMAL_OP.OPT_LATENCY.LABEL',
                    value: 'Latency',
                    icon: 'zap',
                    desc: 'WIZARD.Q_NORMAL_OP.OPT_LATENCY.DESC'
                },
                {
                    label: 'WIZARD.Q_NORMAL_OP.OPT_CONSISTENCY.LABEL',
                    value: 'Consistency',
                    icon: 'lock',
                    desc: 'WIZARD.Q_NORMAL_OP.OPT_CONSISTENCY.DESC'
                }
            ]
        },
        {
            id: 3,
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
            id: 4,
            title: 'WIZARD.Q_SCALABILITY.TITLE',
            description: 'WIZARD.Q_SCALABILITY.DESC',
            key: 'scalabilityNeed',
            options: [
                { label: 'WIZARD.Q_SCALABILITY.OPT_VERTICAL.LABEL', value: 'Vertical', icon: 'arrow-up' },
                { label: 'WIZARD.Q_SCALABILITY.OPT_HORIZONTAL.LABEL', value: 'Horizontal', icon: 'layers' }
            ]
        },
        {
            id: 5,
            title: 'WIZARD.Q_TRANSACTIONS.TITLE',
            description: 'WIZARD.Q_TRANSACTIONS.DESC',
            key: 'transactionType',
            options: [
                { label: 'WIZARD.Q_TRANSACTIONS.OPT_ACID.LABEL', value: 'ACID', icon: 'check-circle' },
                { label: 'WIZARD.Q_TRANSACTIONS.OPT_EVENTUAL.LABEL', value: 'Eventual', icon: 'activity' }
            ]
        },
        {
            id: 6,
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
        this.complete.emit(finalAnswers);
    }

    get progress() {
        return ((this.currentStep() + 1) / this.questions.length) * 100;
    }
}
