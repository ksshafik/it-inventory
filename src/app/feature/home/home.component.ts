import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeatureService } from '../feature.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(public featureService: FeatureService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
