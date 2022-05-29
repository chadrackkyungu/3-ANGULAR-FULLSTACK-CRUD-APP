import { TestBed } from '@angular/core/testing';

import { TrackWebsitePerformanceWithGoogleAnalyticsService } from './track-website-performance-with-google-analytics.service';

describe('TrackWebsitePerformanceWithGoogleAnalyticsService', () => {
  let service: TrackWebsitePerformanceWithGoogleAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackWebsitePerformanceWithGoogleAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
