import { TickerCardUI } from 'entities/TickerCardUI';
import cls from './Explore.module.scss';

export const Explore = () => {
  const tglpData = {
    ticker: 'TGLD',
    correlations: [
      { label: 'Доллар', percentage: 50 },
      { label: 'Золото', percentage: 50 },
    ],
    volatility: 12,
    risk: 'Высокий',
    seasonality: 'Растет в Q4',
    socialInterest: '+20% за неделю',
  };

  const sberData = {
    ticker: 'SBER',
    correlations: [
      { label: 'Индекс', percentage: 14 },
      { label: 'Нефтегаз', percentage: 10 },
    ],
    volatility: 8,
    risk: 'Средний',
    seasonality: 'Падает в Q1',
    socialInterest: '-10% за неделю',
  };

  const aaplData = {
    ticker: 'AAPL',
    correlations: [
      { label: 'Технологии', percentage: 60 },
      { label: 'USD/EUR курс', percentage: 40 },
    ],
    volatility: 7,
    risk: 'Низкий',
    seasonality: 'Стабилен круглогодично',
    socialInterest: '+5% за неделю',
  };

  const goldData = {
    ticker: 'GOLD',
    correlations: [
      { label: 'Инфляция', percentage: 80 },
      { label: 'Доллар', percentage: 20 },
    ],
    volatility: 10,
    risk: 'Средний',
    seasonality: 'Растет в кризисы',
    socialInterest: '+15% за неделю',
  };

  const usdRubData = {
    ticker: 'USD/RUB',
    correlations: [
      { label: 'ЦБ РФ политика', percentage: 70 },
      { label: 'Нефть Brent', percentage: 30 },
    ],
    volatility: 15,
    risk: 'Высокий',
    seasonality: 'Зависит от нефти',
    socialInterest: '+8% за неделю',
  };

  return (
    <div className={cls.app}>
      <h1>Анализ активов</h1>
      <div className={cls.ticker_grid}>
        <TickerCardUI {...tglpData} />
        <TickerCardUI {...sberData} />
        <TickerCardUI {...aaplData} />
        <TickerCardUI {...goldData} />
        <TickerCardUI {...usdRubData} />
      </div>
    </div>
  );
};
