import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexApi: SpacexapiService
  ) {}

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('id'));
    if (flightNumber) {
      this.spacexApi.getMissionByFlightNumber(flightNumber).subscribe({
        next: (data) => {
          this.mission = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load mission details:', err);
          this.loading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
