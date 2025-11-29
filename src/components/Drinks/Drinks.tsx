import { type FormEvent, useState, type FC } from 'react';
import emailjs from 'emailjs-com';

import useStyles from './Drinks.styles';
import { RadioButton, type RadioButtonProps } from '../RadioButton';
import { getFormAnswer, setFormAnswer } from './utils';
import clsx from 'clsx';
import { Announcement } from '../Announcement';
import { Drinks as DrinksPNG } from '../assets/img';

const groupName = 'drink-form';

interface IListItem {
  label: string;
  currentMessage: string;
  onChange: RadioButtonProps['onChange'];
}

const ListItem: FC<IListItem> = ({ label, currentMessage, onChange }) => (
  <RadioButton
    label={label}
    name={groupName}
    value={label}
    isChecked={currentMessage === label}
    onChange={onChange}
  />
);

const allItems1 = ['водка', 'коньяк', 'самогон', 'шампанское'];
const allItems2 = [
  'вино сухое красное',
  'вино сухое белое',
  'вино полусладкое',
  'безалкогольные напитки',
];

export const Drinks: FC = () => {
  const classes = useStyles();

  const formAnswer = getFormAnswer();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: 'birthdayinvitation1328@gmail.com',
    message: formAnswer ?? '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formAnswer !== null || isLoading || formData.message === '') {
      return;
    }

    try {
      setIsLoading(true);
      await emailjs.send('service_rfyfpzc', 'template_b0l6ptr', formData, 'xJ6zTMzVmy95FINXI');

      setFormAnswer(formData.message);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange: RadioButtonProps['onChange'] = (value) => {
    if (formAnswer !== null || isLoading) {
      return;
    }

    setFormData((prev) => ({ ...prev, message: value }));
  };

  return (
    <div className={classes.drinks}>
      <Announcement>
        <div className={classes.drinksInner}>
          <span className={classes.title}>
            {`Чем будем скреплять тосты?\nТолько один вариант признается “правильным”`}
          </span>
          <form onSubmit={handleSubmit}>
            <div className={classes.list1}>
              {allItems1.map((label) => (
                <ListItem
                  key={label}
                  label={label}
                  currentMessage={formData.message}
                  onChange={handleChange}
                />
              ))}
            </div>

            <div className={classes.list2Wrapper}>
              <img src={DrinksPNG} width={121} height={126} />

              <div className={classes.list2}>
                {allItems2.map((label) => (
                  <ListItem
                    key={label}
                    label={label}
                    currentMessage={formData.message}
                    onChange={handleChange}
                  />
                ))}
                <button
                  type="submit"
                  className={clsx(classes.button, {
                    [classes.disabled]: formAnswer !== null || isLoading,
                  })}
                >
                  {formAnswer === null ? 'Ответить' : 'Ваш ответ принят'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Announcement>
    </div>
  );
};
