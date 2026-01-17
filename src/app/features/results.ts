import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationEngineService } from '../core/services/recommendation.service';
import { Database, QuestionnaireInput, RecommendationResult } from '../core/models/database.model';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './results.html',
  styles: []
})
export class ResultsComponent implements OnInit {
  @Input() userAnswers!: QuestionnaireInput;

  recommendationService = inject(RecommendationEngineService);
  results: RecommendationResult[] = [];

  ngOnInit() {
    if (this.userAnswers) {
      this.results = this.recommendationService.calculateRecommendations(this.userAnswers);
    }
  }

  get bestMatch() {
    return this.results[0];
  }

  get alternatives() {
    return this.results.slice(1, 4);
  }
}
