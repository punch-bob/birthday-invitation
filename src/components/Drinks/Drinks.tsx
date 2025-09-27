import { type FormEvent, useState, type FC } from 'react';
import emailjs from 'emailjs-com';

import useStyles from './Drinks.styles';
import { RadioButton, type RadioButtonProps } from '../RadioButton';
import { getFormAnswer, setFormAnswer } from './utils';
import clsx from 'clsx';

const groupName = 'drink-form';

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

    if (formAnswer !== null || isLoading) {
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
      <span className={classes.title}>Что пьем?</span>

      <div className={classes.info}>Отметьте, пожалуйста, что из напитков вы предпочитаете:</div>

      <form className={classes.form} onSubmit={handleSubmit}>
        <RadioButton
          label="Водка"
          name={groupName}
          value="Водка"
          isChecked={formData.message === 'Водка'}
          onChange={handleChange}
        />
        <RadioButton
          label="Коньяк"
          name={groupName}
          value="Коньяк"
          isChecked={formData.message === 'Коньяк'}
          onChange={handleChange}
        />
        <RadioButton
          label="Продукт домашнего приготовления"
          name={groupName}
          value="Продукт домашнего приготовления"
          isChecked={formData.message === 'Продукт домашнего приготовления'}
          onChange={handleChange}
        />
        <RadioButton
          label="Вино сухое"
          name={groupName}
          value="Вино сухое"
          isChecked={formData.message === 'Вино сухое'}
          onChange={handleChange}
        />
        <RadioButton
          label="Вино полусладкое"
          name={groupName}
          value="Вино полусладкое"
          isChecked={formData.message === 'Вино полусладкое'}
          onChange={handleChange}
        />
        <RadioButton
          label="Шампанское"
          name={groupName}
          value="Шампанское"
          isChecked={formData.message === 'Шампанское'}
          onChange={handleChange}
        />
        <RadioButton
          label="Безалкогольные напитки"
          name={groupName}
          value="Безалкогольные напитки"
          isChecked={formData.message === 'Безалкогольные напитки'}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={clsx(classes.button, { [classes.disabled]: formAnswer !== null || isLoading })}
        >
          Ответить
        </button>
      </form>
    </div>
  );
};
