export function trackEvent(name: string, params?: Record<string, string>) {
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", name, params);
}