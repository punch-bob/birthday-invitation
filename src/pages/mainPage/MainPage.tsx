import { Fragment, type FC } from 'react';
import useStyles from './MainPage.styles';
import { FilmBorder } from '@/components/FilmBorder';
import { Header } from '@/components/Header';
import { DateAndPlace } from '@/components/DateAndPlace';
import { ProgramList } from '@/components/ProgramList';
import { DressCode } from '@/components/DressCode';
import { Ideas } from '@/components/Ideas';
import { Drinks } from '@/components/Drinks';
import { Helmet } from 'react-helmet-async';
import { PostScriptum } from '@/components/PostScriptum';
import { Countdown } from '@/components/Countdown';

export const MainPage: FC = () => {
  const classes = useStyles();

  const product = {
    title: 'Юбилей 45!',
    description: 'Пригласительное на юбилей',
    image: `https://sharomaniya63.ru/wp-content/uploads/2020/10/shariki_na_ubiley.jpg`,
    url: window.location.origin,
  };

  return (
    <Fragment>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />

        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={product.url} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className={classes.mainPage}>
        <div className={classes.leftBorder}>
          <FilmBorder />
        </div>
        <div className={classes.rightBorder}>
          <FilmBorder />
        </div>
        <div className={classes.mainPageInner}>
          <Header />

          <DateAndPlace />

          <ProgramList />

          <DressCode />

          <Ideas />

          <Drinks />

          <PostScriptum />

          <Countdown />
        </div>
      </div>
    </Fragment>
  );
};
