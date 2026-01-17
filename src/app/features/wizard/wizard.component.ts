import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireInput } from '../../core/models/database.model';
import { LucideAngularModule, ArrowRight, Check, Disc, Database, Layers, DollarSign, Activity, FileJson, Share2, Search, Table, Key, Lock, AlertTriangle } from 'lucide-angular';

interface Question {
    id: number;
    title: string;
    description: string;
    key: keyof QuestionnaireInput;
    options: { label: string; value: any; icon?: string; desc?: string }[];
}

@Component({
    selector: 'app-wizard',
    standalone: true,
    imports: [
        CommonModule,
        LucideAngularModule
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
            title: 'CAP Theorem: Network Failure',
            description: 'In the event of a network partition, what is your priority?',
            key: 'consistencyPreference',
            options: [
                {
                    label: 'Consistency (CP)',
                    value: 'Strong',
                    icon: 'lock',
                    desc: 'System guarantees data correctness, even if it has to pause requests.'
                },
                {
                    label: 'Availability (AP)',
                    value: 'Eventual',
                    icon: 'activity',
                    desc: 'System guarantees a response, even if the data might be slightly outdated.'
                }
            ]
        },
        {
            id: 2,
            title: 'Data Structure',
            description: 'What is the predominant shape of your data?',
            key: 'dataStructure',
            options: [
                { label: 'Relational (Tables)', value: 'Relational', icon: 'table' },
                { label: 'JSON Documents', value: 'Document', icon: 'file-json' },
                { label: 'Key-Value Pairs', value: 'Key-Value', icon: 'key' },
                { label: 'Graph / Relationships', value: 'Graph', icon: 'share-2' },
                { label: 'Wide Column', value: 'Wide-Column', icon: 'columns' },
                { label: 'Search Engine', value: 'Search Engine', icon: 'search' }
            ]
        },
        {
            id: 3,
            title: 'PACELC: Latency vs Consistency',
            description: 'During normal operation, how sensitive is your application to latency?',
            key: 'latencySensitivity',
            options: [
                { label: 'Latency Critical', value: 'High', desc: 'Every millisecond counts (Real-time, Gaming).' },
                { label: 'Consistency Critical', value: 'Low', desc: 'I prefer stricter data integrity over raw speed.' }
            ]
        },
        {
            id: 4,
            title: 'Budget & Complexity',
            description: 'What is your operational budget and tolerance for complexity?',
            key: 'budget',
            options: [
                { label: 'Low Cost / Open Source', value: 'Low' },
                { label: 'Medium / Managed Services', value: 'Medium' },
                { label: 'High / Enterprise Scale', value: 'High' }
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
