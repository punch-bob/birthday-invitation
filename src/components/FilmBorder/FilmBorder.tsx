import { type FC } from 'react';
import useStyles from './FilmBorder.styles';

export const FilmBorder: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.filmBorder}>
      {Array.from({ length: 90 }, (_, index) => (
        <div key={index} className={classes.block} />
      ))}
    </div>
  );
};
