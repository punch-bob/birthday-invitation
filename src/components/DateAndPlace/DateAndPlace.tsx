import { type FC } from 'react';

import useStyles from './DateAndPlace.styles';
import { Announcement } from '../Announcement';

export const DateAndPlace: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.dateAndPlaceWrapper}>
      <Announcement>
        <div className={classes.dateAndPlace}>
          <span className={classes.text}>
            <span className={classes.bold}>Дата:</span> 28 декабря{'\n'}
            <div className={classes.rightAlign}>(воскресенье) 2025 года</div>
          </span>
          <span className={classes.text}>
            <span className={classes.bold}>Место встречи:</span> банкетный{'\n'}
            <div className={classes.rightAlign}>
              зал гостиничного комплекса “ДК”, ул. Выборная 29а
            </div>
          </span>
          <span className={classes.text}>{'(вход в банкетный зал\nс левого торца здания)'}</span>
        </div>
      </Announcement>
    </div>
  );
};
