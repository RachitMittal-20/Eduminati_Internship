import React from 'react';

export interface PerformanceMetrics {
  navigationStart: number;
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToFirstByte: number;
}

export function getPerformanceMetrics(): Partial<PerformanceMetrics> {
  if (typeof window === 'undefined') return {};

  const metrics: Partial<PerformanceMetrics> = {};
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

  if (navigation) {
    metrics.navigationStart = navigation.fetchStart;
    metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    metrics.loadComplete = navigation.loadEventEnd - navigation.loadEventStart;
    metrics.timeToFirstByte = navigation.responseStart - navigation.fetchStart;
  }

  // Paint entries
  const paintEntries = performance.getEntriesByType('paint');
  paintEntries.forEach((entry: PerformanceEntry) => {
    if (entry.name === 'first-paint') {
      metrics.firstPaint = (entry as any).startTime;
    }
  });

  return metrics;
}

export function calculatePerformanceGrade(metrics: Partial<PerformanceMetrics>): string {
  let score = 100;

  if (metrics.domContentLoaded && metrics.domContentLoaded > 2000) score -= 20;
  if (metrics.loadComplete && metrics.loadComplete > 3000) score -= 15;
  if (metrics.firstPaint && metrics.firstPaint > 1500) score -= 15;
  if (metrics.timeToFirstByte && metrics.timeToFirstByte > 500) score -= 10;

  if (score >= 90) return 'Excellent';
  if (score >= 75) return 'Good';
  if (score >= 60) return 'Needs Improvement';
  return 'Poor';
}
