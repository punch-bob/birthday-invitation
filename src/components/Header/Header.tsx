import { type FC } from 'react';

import useStyles from './Header.styles';
import { Announcement } from '../Announcement';

export const Header: FC = () => {
  const classes = useStyles();

  const text =
    'Вы подозреваетесь в сотрудничестве с мафией!\n\nДля выяснения обстоятельств вам необходимо подойти на гангстерскую вечеринку, посвященную юбилею главного мафиози';

  return (
    <div className={classes.header}>
      <Announcement width={380}>
        <span className={classes.text}>{text}</span>
      </Announcement>

      <div className={classes.rotate}>
        <Announcement width={336}>
          <div className={classes.search}>
            <span className={classes.middleText}>В РОЗЫСКЕ</span>
            <div className={classes.searchInner}>
              <img
                src="/birthday-invitation/src/components/assets/img/father.png"
                width={192}
                height={152}
              />
              <div className={classes.innerRight}>
                <span className={classes.bigText}>45 лет</span>
                <span className={classes.smallText}>
                  сдавшему его местоположение вознаграждение
                </span>
              </div>
            </div>
            <span className={classes.middleText}>5000000000 $</span>
          </div>
        </Announcement>
      </div>
    </div>
  );
};
