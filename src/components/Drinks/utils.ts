const FORM_ANSWER = 'mafiaFormAnswer';

export const getFormAnswer = () => localStorage.getItem(FORM_ANSWER);

export const setFormAnswer = (value: string) => localStorage.setItem(FORM_ANSWER, value);
