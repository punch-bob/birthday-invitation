import { useState, useEffect, type FC } from 'react';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

import useStyles from './Countdown.styles';
import { Announcement } from '../Announcement';

type WordCases = [string, string, string];

const targetDate = new Date(2025, 11, 28, 15, 0, 0);
// const targetDate = new Date(Date.now() + 5000);

export const Countdown: FC = () => {
  const classes = useStyles();

  const [timeLeft, setTimeLeft] = useState('');

  // Функция для склонения слов
  const declension = (number: number, words: WordCases): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]];
  };

  // Функция форматирования продолжительности
  const formatDuration = (startDate: Date, endDate: Date): string => {
    const totalDays = Math.max(0, differenceInDays(endDate, startDate));
    const remainingHours = Math.max(0, differenceInHours(endDate, startDate) % 24);
    const remainingMinutes = Math.max(0, differenceInMinutes(endDate, startDate) % 60);
    const remainingSeconds = Math.max(0, differenceInSeconds(endDate, startDate) % 60);

    const parts: string[] = [];

    if (totalDays > 0) {
      parts.push(`${totalDays} ${declension(totalDays, ['день', 'дня', 'дней'])}`);
    }

    if (remainingHours > 0) {
      parts.push(`${remainingHours} ${declension(remainingHours, ['час', 'часа', 'часов'])}`);
    }

    if (remainingMinutes > 0) {
      parts.push(
        `${remainingMinutes} ${declension(remainingMinutes, ['минута', 'минуты', 'минут'])}`,
      );
    }

    if (remainingMinutes <= 0 && remainingSeconds > 0) {
      parts.push(
        `${remainingSeconds} ${declension(remainingSeconds, ['секунда', 'секунды', 'секунд'])}`,
      );
    }

    if (parts.length === 0) {
      return 'Событие началось!';
    }

    return parts.join(' ');
  };

  useEffect(() => {
    const updateCountdown = (): void => {
      const now = new Date();
      const target = new Date(targetDate);

      setTimeLeft(formatDuration(now, target));
    };

    updateCountdown();

    const timerId = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <div className={classes.countdown}>
      <Announcement>
        <div className={classes.inner}>
          <span className={classes.text}>
            Не пропусти это событие, оно...войдет в историю нашей банды.
          </span>
          <div className={classes.title}>До события осталось:</div>
          <div className={classes.title}>{timeLeft}</div>
        </div>
      </Announcement>
    </div>
  );
};
