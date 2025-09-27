import { type FC, useEffect, useState } from 'react';
import useStyles, { BLOCK_GAP, BLOCK_HEIGHT } from './FilmBorder.styles';

export const FilmBorder: FC = () => {
  const classes = useStyles();

  const [countBlocks, setCountBlocks] = useState(76);

  useEffect(() => {
    const calculateVisibleBlocks = () => {
      const bodyHeight = window.document.body.scrollHeight;
      const availableHeight = bodyHeight - 10;
      const maxVisibleBlocks = Math.ceil(availableHeight / (BLOCK_HEIGHT + BLOCK_GAP));

      setCountBlocks(maxVisibleBlocks);
    };

    calculateVisibleBlocks();

    window.addEventListener('resize', calculateVisibleBlocks);

    return () => {
      window.removeEventListener('resize', calculateVisibleBlocks);
    };
  }, []);

  return (
    <div className={classes.filmBorder}>
      {Array.from({ length: countBlocks }, (_, index) => (
        <div key={index} className={classes.block} />
      ))}
    </div>
  );
};
