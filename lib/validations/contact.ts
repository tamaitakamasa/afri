import { z } from 'zod';
import { getEmailSchema, getNameSchema } from './shared';

export const getContactFormSchema = () =>
	z.object({
		name: getNameSchema(),
		email: getEmailSchema(),
		body: z
			.string()
			.min(10, '本文は10文字以上で入力してください')
			.max(1000, '本文は1000文字以内で入力してください'),
		privacyPolicy: z.boolean().refine((val) => val === true, {
			message: 'プライバシーポリシーに同意する必要があります'
		})
	});

export const contactFormSchema = getContactFormSchema();

export type ContactFormData = z.infer<typeof contactFormSchema>;
