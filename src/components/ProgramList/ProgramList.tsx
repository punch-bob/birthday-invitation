import { type ReactNode, type FC } from 'react';

import useStyles from './ProgramList.styles';
import { Announcement } from '../Announcement';

interface IListItem {
  children: ReactNode;
}
const ListItem: FC<IListItem> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <img
        src="/birthday-invitation/src/components/assets/img/pistol.png"
        width={37}
        height={22}
        className={classes.floatLeft}
      />
      <span className={classes.itemText}>{children}</span>
    </div>
  );
};

export const ProgramList: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.lists}>
      <Announcement>
        <div className={classes.programList}>
          <span className={classes.title}>ПЛАН ОПЕРАЦИИ:</span>
          <span className={classes.time}>15:00-16:00</span>
          <ListItem>Разведка боем — знакомство с барменом и его запретными коктейлями</ListItem>
          <ListItem>Фотофиксация для досье</ListItem>
          <ListItem>Сбор компромата и пожеланий для Босса в специальном альбоме</ListItem>
        </div>
      </Announcement>

      <Announcement>
        <div className={classes.announcementInner}>
          <div className={classes.programList}>
            <span className={classes.title}>{'НАЧАЛО ОСНОВНОЙ\nОПЕРАЦИИ В 16:00'}</span>
            <div className={classes.programListWrapper}>
              <ListItem>Работают «музыкальные братья»</ListItem>
              <ListItem>Появятся таинственные личности с фокусами</ListItem>
              <ListItem>Обеспечим высшей категории угощениями и напитками</ListItem>
            </div>
          </div>
          <img
            src="/birthday-invitation/src/components/assets/img/cards.png"
            width={100}
            height={65}
            className={classes.cards}
          />
          <img
            src="/birthday-invitation/src/components/assets/img/guitar.png"
            width={115}
            height={98}
            className={classes.guitar}
          />
          <img
            src="/birthday-invitation/src/components/assets/img/accordion.png"
            width={66}
            height={51}
            className={classes.accordion}
          />
        </div>
      </Announcement>

      <div style={{ marginTop: 30 }}>
        <Announcement width={281} rotateDeg={12}>
          <div className={classes.fortuneWheelAnnouncement}>
            <div className={classes.programList}>
              <ListItem>
                главная миссия — <span style={{ fontWeight: 840 }}>Колесо Фортуны</span> с ценными{' '}
                {`"доказательствами"`}
              </ListItem>
            </div>
          </div>
          <img
            src="/birthday-invitation/src/components/assets/img/fortune-wheel.png"
            width={115}
            height={115}
            className={classes.fortuneWheel}
          />
        </Announcement>
      </div>

      <div style={{ marginTop: 30 }}>
        <Announcement width={281} rotateDeg={-14}>
          <div className={classes.fortuneWheelAnnouncement}>
            <div className={classes.programList}>
              <ListItem>
                P.S. План «Торт» будет приведён в действие в условленное время. Не проговоритесь.
              </ListItem>
            </div>
          </div>
          <img
            src="/birthday-invitation/src/components/assets/img/cake.png"
            width={139}
            height={92}
            className={classes.cake}
          />
        </Announcement>
      </div>
    </div>
  );
};
