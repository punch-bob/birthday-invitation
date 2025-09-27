import { useState, useEffect, type FC } from 'react';
import { intervalToDuration } from 'date-fns';

import useStyles from './Countdown.styles';
import clsx from 'clsx';

type WordCases = [string, string, string];

const secretBanner =
  'Ваш звёздный момент начинается здесь...\nПод стулом вас ждёт небольшой сюрприз — часть сценария сегодняшнего вечера.\nОткройте его!';

const targetDate = new Date();
// targetDate.setDate(targetDate.getDate() + 58);
// targetDate.setHours(targetDate.getHours() + 15);
// targetDate.setMinutes(targetDate.getMinutes() + 26);
targetDate.setSeconds(targetDate.getSeconds() + 5);

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
    const duration = intervalToDuration({
      start: startDate,
      end: endDate,
    });

    const parts: string[] = [];

    if (duration.days && duration.days > 0) {
      parts.push(`${duration.days} ${declension(duration.days, ['день', 'дня', 'дней'])}`);
    }

    if (duration.hours && duration.hours > 0) {
      parts.push(`${duration.hours} ${declension(duration.hours, ['час', 'часа', 'часов'])}`);
    }

    if (duration.minutes && duration.minutes > 0) {
      parts.push(
        `${duration.minutes} ${declension(duration.minutes, ['минута', 'минуты', 'минут'])}`,
      );
    }

    if (!duration.minutes && duration.seconds && duration.seconds > 0) {
      parts.push(
        `${duration.seconds} ${declension(duration.seconds, ['секунда', 'секунды', 'секунд'])}`,
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
