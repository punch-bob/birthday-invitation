import { type FC } from 'react';

import useStyles from './Header.styles';

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <span>юбилей!</span>
      <span className={classes.number}>45</span>
      <div className={classes.appeal}>
        <span>Дамы и господа!</span>
        <span>Дорогие друзья и близкие!</span>
      </div>
      <span className={classes.invite}>
        Мы рады пригласить вас на грандиозный юбилей в стиле кинопремии!
      </span>
    </div>
  );
};
