import { createUseStyles } from 'react-jss';
import announcement from '../assets/img/announcement.png';

export default createUseStyles({
  announcement: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundImage: `url("${announcement}")`,
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
  },
});
