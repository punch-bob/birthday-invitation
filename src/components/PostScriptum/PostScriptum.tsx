import { type FC } from 'react';

import useStyles from './PostScriptum.styles';

export const PostScriptum: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.postScriptum}>
      <div>
        <div className={classes.lightText}>Сообщите, пожалуйста, о своем присутствии до</div>
        <div className={classes.boldText}>1 ноября 2025 года</div>
      </div>

      <div className={classes.boldText}>
        Не пропустите этот вечер — он станет настоящим событием года!
      </div>
    </div>
  );
};
