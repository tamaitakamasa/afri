// components/form/contact-form.tsx

'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, getContactFormSchema } from '@/lib/validations/contact';
import { useState } from 'react';

const SSGFORM_URL = 'https://ssgform.com/s/Dwe48gfBEyBU';

export default function ContactForm() {
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string | null;
	}>({ type: null, message: null });

	const form = useForm<ContactFormData>({
		resolver: zodResolver(getContactFormSchema()),
		defaultValues: {
			name: '',
			email: '',
			body: '',
			privacyPolicy: false
		}
	});

	async function onSubmit(data: ContactFormData) {
		try {
			const formData = new FormData();
			formData.append('お名前', data.name);
			formData.append('メールアドレス', data.email);
			formData.append('お問い合わせ内容', data.body);

			const response = await fetch(SSGFORM_URL, {
				method: 'POST',
				headers: {
					'X-Requested-With': 'XMLHttpRequest' // このヘッダーを追加
				},
				body: formData
			});

			if (response.ok) {
				setSubmitStatus({
					type: 'success',
					message: '送信が完了しました。お問い合わせありがとうございます。'
				});
				form.reset();
			} else {
				throw new Error('送信に失敗しました');
			}
		} catch {
			setSubmitStatus({
				type: 'error',
				message: '送信に失敗しました。時間をおいて再度お試しください。'
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{submitStatus.type && <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{submitStatus.message}</div>}

				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								お名前
							</FormLabel>
							<FormControl>
								<Input
									placeholder="山田 太郎"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								メールアドレス
							</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="taro@example.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="body"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								お問い合わせ内容
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="お問い合わせ内容を入力してください"
									className="min-h-[120px]"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="privacyPolicy"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-3 space-y-0">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>
									<span>
										利用規約に同意する
									</span>
									<a href="/terms" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary underline hover:no-underline">
										（利用規約を読む）
									</a>
								</FormLabel>
								<FormMessage className='mt-4' />
							</div>
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
					{form.formState.isSubmitting
						? '送信中...'
						: '送信'
					}
				</Button>
			</form>
		</Form>
	);
}
