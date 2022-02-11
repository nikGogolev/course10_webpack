import { DateTime } from "luxon";

export function timerHandler(estimatedTime) {

  const firstDate = DateTime.fromISO(new Date().toISOString());
  const secondDate = DateTime.fromISO(estimatedTime);

  return secondDate.diff(firstDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
}

// 3
export const timerResultToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
        ${diff.hours ? 'Часов: ' + diff.hours : ''}
        ${diff.minutes ? 'Минут: ' + diff.minutes : ''}
        ${diff.seconds ? 'Секунд: ' + Math.floor(diff.seconds) : ''}
    </span>
`;