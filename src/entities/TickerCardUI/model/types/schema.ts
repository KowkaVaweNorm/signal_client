export type Correlation = {
  label: string;
  percentage: number;
};

export type TickerCardProps = {
  ticker: string;
  correlations: Correlation[];
  volatility: number;
  risk: string;
  seasonality: string;
  socialInterest: string;
};
