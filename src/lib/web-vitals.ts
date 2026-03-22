import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', {
      name: metric.name,
      delta: metric.delta,
      id: metric.id,
      value: metric.value,
      rating: metric.rating,
    });
  }

  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // You can send to your analytics service here
    // Example: sendToAnalytics(metric)
    const body = JSON.stringify(metric);
    
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/vitals', body);
    } else {
      fetch('/api/vitals', { body, method: 'POST', keepalive: true });
    }
  }
}

export function initializeWebVitals() {
  onCLS(reportWebVitals);
  onINP(reportWebVitals);
  onFCP(reportWebVitals);
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);
}
