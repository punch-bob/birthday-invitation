import { type FC } from 'react';

import useStyles from './Ideas.styles';
import { Announcement } from '../Announcement';

export const Ideas: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.ideas}>
      <Announcement width={298} rotateDeg={-13}>
        <span className={classes.info}>
          {`Есть желание «выступить»?\n(песня, танец...)\nСвяжитесь с нашим Смотрящим.\n\nВладислав 8(913)387-85-79`}
        </span>
      </Announcement>
      <img
        src="/birthday-invitation/src/components/assets/img/dance.png"
        width={132}
        height={179}
        className={classes.dance}
      />
    </div>
  );
};
