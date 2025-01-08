const reportWebVitals = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

export interface WebVitalsMetric {
  name: string;
  delta: number;
  id: string;
  value: number;
}