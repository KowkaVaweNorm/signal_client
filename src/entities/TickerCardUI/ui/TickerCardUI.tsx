import type { TickerCardProps } from '../model/types/schema';
import cls from './TickerCardUI.module.scss';

export const TickerCardUI = ({
  ticker,
  correlations,
  volatility,
  risk,
  seasonality,
  socialInterest,
}: TickerCardProps) => {
  return (
    <div className={cls.ticker_card}>
      <div className={cls.asset_header}>{ticker}</div>
      <div className={cls.correlation_container}>
        {correlations.map((correlation, index) => (
          <div key={index} className={cls.correlation_item}>
            <div className={cls.progress_bar}>
              <div
                className={cls.progress_fill}
                style={{ width: `${correlation.percentage}%` }}
              ></div>
            </div>
            <div className={cls.correlation_label}>
              {correlation.label} ({correlation.percentage}%)
            </div>
          </div>
        ))}
      </div>
      <div className={cls.additional_info}>
        <div className={cls.info_item}>
          <span className={cls.label}>Волатильность:</span>{' '}
          <span className={cls.value}>{volatility}%</span>
        </div>
        <div className={cls.info_item}>
          <span className={cls.label}>Риск:</span>{' '}
          <span className={cls.value}>{risk}</span>
        </div>
        <div className={cls.info_item}>
          <span className={cls.label}>Сезонность:</span>{' '}
          <span className={cls.value}>{seasonality}</span>
        </div>
        <div className={cls.info_item}>
          <span className={cls.label}>Социальный интерес:</span>{' '}
          <span className={cls.value}>{socialInterest}</span>
        </div>
      </div>
    </div>
  );
};
