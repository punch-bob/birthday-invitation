import { type FC } from 'react';

import useStyles from './ProgramList.styles';
import {
  CameraOutline,
  CheeseCake,
  Cocktail,
  CupMusic,
  MenuBookOutline,
  MusicNote,
} from '../assets';

export const ProgramList: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.programList}>
      <span className={classes.title}>В программе:</span>
      <div className={classes.mainList}>
        <div className={classes.listItem}>
          <div className={classes.mainCircle}>1</div>В 15:00 сбор гостей
        </div>

        <div className={classes.secondaryItem}>
          <div className={classes.secondaryCircle}>
            <CameraOutline />
          </div>
          Фотозона с лучшим фотографом — чтобы запечатлеть ваш звёздный образ
        </div>

        <div className={classes.secondaryItem}>
          <div className={classes.secondaryCircle}>
            <Cocktail />
          </div>
          {'Авторский бар\nс фирменными коктейлями и прохладительными напитками'}
        </div>

        <div className={classes.secondaryItem}>
          <div className={classes.secondaryCircle}>
            <MenuBookOutline />
          </div>
          Альбом пожеланий — оставьте самые тёплые слова имениннице
        </div>
      </div>

      <div className={classes.mainList}>
        <div className={classes.listItem}>
          <div className={classes.mainCircle}>2</div>В 16:00 начало торжества
        </div>

        <div className={classes.secondaryItem}>
          <div className={classes.secondaryCircle}>
            <MusicNote />
          </div>
          Живая музыка и невероятные конкурсы
        </div>

        <div className={classes.secondaryItem}>
          <div className={classes.secondaryCircle}>
            <CupMusic />
          </div>
          Церемония награждения самых активных гостей
        </div>

        <div className={classes.secondaryItem}>
          <div className={classes.secondaryCircle}>
            <CheeseCake />
          </div>
          {'Изысканные угощения\nи авторский торт'}
        </div>
      </div>
    </div>
  );
};
