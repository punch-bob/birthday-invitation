import { type FC } from 'react';

import useStyles from './DressCode.styles';
import { Dress, Tuxedo } from '../assets';

export const DressCode: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.dressCode}>
      <span className={classes.title}>Дресс-код: образ кинозвезды</span>

      <div className={classes.item}>
        <div className={classes.icon}>
          <Dress />
        </div>
        Дамы в вечерних платьях в пол или длины миди
      </div>

      <div className={classes.item}>
        <div className={classes.icon}>
          <Tuxedo />
        </div>
        Джентельмены в классических костюмах или смокингах с галстуками или бабочками и в
        классических туфлях
      </div>
    </div>
  );
};
