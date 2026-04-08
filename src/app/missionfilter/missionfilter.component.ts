import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  launchYears: string[] = [];
  selectedYear: string = '';
  selectedLaunchSuccess: string = '';
  selectedLandSuccess: string = '';
  loading = true;

  constructor(
    private spacexApi: SpacexapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spacexApi.getAllMissions().subscribe({
      next: (data) => {
        this.missions = data;
        this.filteredMissions = data;
        this.launchYears = [...new Set(data.map(m => m.launch_year))].sort();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  filterByYear(year: string): void {
    if (this.selectedYear === year) {
      this.selectedYear = '';
      this.applyFilters();
      return;
    }
    this.selectedYear = year;
    this.applyFilters();
  }

  filterByLaunchSuccess(value: string): void {
    if (this.selectedLaunchSuccess === value) {
      this.selectedLaunchSuccess = '';
    } else {
      this.selectedLaunchSuccess = value;
    }
    this.applyFilters();
  }

  filterByLandSuccess(value: string): void {
    if (this.selectedLandSuccess === value) {
      this.selectedLandSuccess = '';
    } else {
      this.selectedLandSuccess = value;
    }
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.missions];

    if (this.selectedYear) {
      result = result.filter(m => m.launch_year === this.selectedYear);
    }

    if (this.selectedLaunchSuccess === 'true') {
      result = result.filter(m => m.launch_success === true);
    } else if (this.selectedLaunchSuccess === 'false') {
      result = result.filter(m => m.launch_success === false);
    }

    this.filteredMissions = result;
  }

  viewDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }

  clearFilters(): void {
    this.selectedYear = '';
    this.selectedLaunchSuccess = '';
    this.selectedLandSuccess = '';
    this.filteredMissions = [...this.missions];
  }
}
