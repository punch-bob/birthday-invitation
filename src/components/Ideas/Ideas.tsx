import { type FC } from 'react';

import useStyles from './Ideas.styles';

export const Ideas: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.ideas}>
      <span className={classes.title}>Есть идеи?</span>

      <span className={classes.info}>
        Если у вас интерактивное поздравление или выступление (песня, танец, постановка и т.д.),
        сообщите, пожалуйста, об этом заранее ведущему:
      </span>

      <div className={classes.contact}>
        <div>Владислав</div>
        <div>8 (913) 387-85-79</div>
      </div>
    </div>
  );
};
