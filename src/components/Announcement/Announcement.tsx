import { type FC, type ReactNode } from 'react';

import useStyles from './Announcement.styles';

export interface IAnnouncementProps {
  width?: number;
  rotateDeg?: number;
  children: ReactNode;
}

export const Announcement: FC<IAnnouncementProps> = ({ children, width = 360, rotateDeg = 0 }) => {
  const classes = useStyles();

  return (
    <div
      style={{ width, height: width * 0.67, transform: `rotate(${rotateDeg}deg)` }}
      className={classes.announcement}
    >
      {children}
    </div>
  );
};
