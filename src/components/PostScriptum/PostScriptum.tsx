import { type FC } from 'react';

import useStyles from './PostScriptum.styles';
import { Announcement } from '../Announcement';

export const PostScriptum: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.postScriptum}>
      <Announcement>
        <span className={classes.text}>
          {`Чтобы всё было чисто,\nнам нужна явка всех своих.\nПодтверди участие до 15 декабря!\nНеявка без уважительной причины карается увесистой\nпачкой денег...\nкоторые ты\nподаришь имениннику!`}
        </span>
        <img
          src="/birthday-invitation/src/components/assets/img/money.png"
          width={97}
          height={53}
          className={classes.money}
        />
      </Announcement>
    </div>
  );
};
