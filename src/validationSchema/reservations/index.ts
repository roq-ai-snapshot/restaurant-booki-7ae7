import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  status: yup.string().required(),
  number_of_people: yup.number().integer().required(),
  special_request: yup.string().nullable(),
  table_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
