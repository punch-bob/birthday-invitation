import { useState, useEffect, type FC } from 'react';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

import useStyles from './Countdown.styles';
import clsx from 'clsx';

type WordCases = [string, string, string];

const secretBanner =
  'Ваш звёздный момент начинается здесь...\nПод стулом вас ждёт небольшой сюрприз — часть сценария сегодняшнего вечера.\nОткройте его!';

const targetDate = new Date(2025, 10, 15, 17, 0, 0);

export const Countdown: FC = () => {
  const classes = useStyles();

  const [timeLeft, setTimeLeft] = useState('');
  const [shouldShowBanner, setShouldShowBanner] = useState(false);

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

      if (now >= target) {
        setShouldShowBanner(true);
        return;
      }

      setTimeLeft(formatDuration(now, target));
    };

    updateCountdown();

    const timerId = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <div className={classes.countdown}>
      <div className={classes.bannerWrapper}>
        <div className={clsx(classes.secretBanner, { [classes.timerFinished]: shouldShowBanner })}>
          {secretBanner}
        </div>

        <div className={clsx(classes.banner, { [classes.timerFinished]: shouldShowBanner })}>
          Совершенно секретно!
        </div>
      </div>
      {!shouldShowBanner && (
        <div className={classes.timerWrapper}>
          <div className={classes.timerTitle}>До события осталось:</div>
          <div className={classes.timer}>{timeLeft}</div>
        </div>
      )}
    </div>
  );
};
