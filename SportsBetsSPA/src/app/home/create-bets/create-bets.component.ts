import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RepositoryService } from 'src/Services/repository.service';

export interface BetCondition {
  condition: string;
  viewValue: string;
}


@Component({
  selector: 'app-create-bets',
  templateUrl: './create-bets.component.html',
  styleUrls: ['./create-bets.component.scss']
})
export class CreateBetsComponent implements OnInit {
  conditions: BetCondition[] = [
    { condition: 'greater-than', viewValue: 'Greater Than' },
    { condition: 'lesser-than', viewValue: 'Lesser Than'}
  ];
  createBetForm: FormGroup;
  constructor(private fb: FormBuilder, private repo: RepositoryService) {}

  ngOnInit() {
    this.createBetForm = this.fb.group({
      Amount: this.fb.control('')
    });
  }
}
