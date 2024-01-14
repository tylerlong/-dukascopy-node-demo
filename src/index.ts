import { getHistoricalRates } from 'dukascopy-node';

const main = async () => {
  try {
    const data = await getHistoricalRates({
      instrument: 'aaplususd',
      dates: {
        from: new Date('2024-01-01'),
        to: new Date('2024-01-15'),
      },
      timeframe: 'd1',
      format: 'json',
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
};
main();
