import { type FC } from 'react';

import useStyles from './DateAndPlace.styles';

export const DateAndPlace: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.dateAndPlace}>
      <div className={classes.date}>
        <span className={classes.paragraphTitle}>Дата:</span>
        <span className={classes.paragraphInfo}>15 ноября (суббота) 2025 года</span>
      </div>
      <div className={classes.place}>
        <span className={classes.paragraphTitle}>Место:</span>
        <span className={classes.paragraphInfo}>
          Банкетный зал гостиничного комплекса «ДК», ул. Выборная, 29а (вход в банкетный зал с торца
          здания)
        </span>
      </div>
    </div>
  );
};
