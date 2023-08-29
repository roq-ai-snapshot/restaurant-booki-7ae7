import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  speciality: yup.string().required(),
  experience_years: yup.number().integer().required(),
  availability: yup.boolean().required(),
  working_hours: yup.string().required(),
  off_days: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
