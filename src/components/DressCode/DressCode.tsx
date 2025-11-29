import { type FC } from 'react';

import useStyles from './DressCode.styles';
import { Announcement } from '../Announcement';

export const DressCode: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.dressCode}>
      <Announcement>
        <span className={classes.text}>
          Чтобы обеспечить нашу общую конспирацию и безупречный стиль, просим придерживаться
          следующего дресс-кода: <b>{`"Великий Гэтсби встречает Крестного Отца"`}</b>
        </span>
      </Announcement>

      <div className={classes.wrapper}>
        <Announcement width={253} rotateDeg={-14}>
          <span className={classes.smallText}>
            <b>{`Джентельмены:\n`}</b>
            Классические брюки, пиджак/жилет, галстук/бабочка, туфли Аксессуары: шляпа, подтяжки,
            запонки, пистолет, сигара
          </span>
        </Announcement>
        <img
          src="/birthday-invitation/src/components/assets/img/gentleman.png"
          width={96}
          height={193}
          className={classes.gentleman}
        />
      </div>

      <div style={{ height: 180 }} className={classes.wrapper}>
        <img
          src="/birthday-invitation/src/components/assets/img/lady.png"
          width={119}
          height={205}
          className={classes.lady}
        />
        <div className={classes.ladyAnnouncement}>
          <Announcement width={253} rotateDeg={14}>
            <span className={classes.text}>
              <b>{`Дамы:\n`}</b>
              Элегантное платье, шикарная прическа. Аксессуары: перья, мех, бусы, шляпка, сумочка,
              веер
            </span>
          </Announcement>
        </div>
      </div>

      <Announcement>
        <div className={classes.manyPeoples}>
          <img
            src="/birthday-invitation/src/components/assets/img/gentleman-and-lady.png"
            width={171}
            height={194}
          />
          <img
            src="/birthday-invitation/src/components/assets/img/gentleman-2.png"
            width={90}
            height={175}
          />
          <img
            src="/birthday-invitation/src/components/assets/img/lady-2.png"
            width={82}
            height={172}
          />
        </div>
      </Announcement>

      <Announcement>
        <div>
          <div className={classes.policeText}>
            Полиция моды будет бдительна!!! Явка в несоответствующей одежде может караться штрафным
            бокалом итальянской граппы!
          </div>
          <img
            src="/birthday-invitation/src/components/assets/img/police.png"
            width={134}
            height={196}
            className={classes.police}
          />
        </div>
      </Announcement>
    </div>
  );
};
