import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

const SuggestionForm = () => {
	const { t } = useTranslation();
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className='w-full flex flex-col gap-2 sm:gap-6 py-4 sm:p-8 border-t-2 border-orange-500'>
			<div className='text-xs sm:text-base font-bold'>{t('suggestionForm.title')}</div>
			<div className='text-[10px] sm:text-sm text-justify'>{t('suggestionForm.subtitle')}</div>
			<form className=' flex flex-col gap-2 sm:gap-6' onSubmit={formik.handleSubmit}>
				<div className='flex flex-col gap-2 text-[10px] sm:text-sm font-bold'>
					<label htmlFor='name'>{t('Name')}</label>
					<input
						id='name'
						name='name'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.name}
						className='bg-zinc-100 font-normal rounded-md text-[10px] sm:text-sm p-0.5 sm:p-2 border border-transparent hover:border-orange-400 trans outline-none'
					/>
				</div>
				<div className='flex flex-col gap-2 text-[10px] sm:text-sm font-bold'>
					<label htmlFor='email'>{t('Email')}</label>
					<input
						id='email'
						name='email'
						type='email'
						onChange={formik.handleChange}
						value={formik.values.email}
						className='bg-zinc-100 font-normal rounded-md text-[10px] sm:text-sm p-0.5 sm:p-2 border border-transparent hover:border-orange-400 trans outline-none'
					/>
				</div>
				<div className='flex flex-col gap-2 text-[10px] sm:text-sm font-bold'>
					<label htmlFor='message'>{t('Message')}</label>
					<textarea
						rows={5}
						id='message'
						name='message'
						onChange={formik.handleChange}
						value={formik.values.message}
						className='bg-zinc-100 font-normal resize-none rounded-md text-[10px] sm:text-sm p-2 border border-transparent hover:border-orange-400 trans outline-none'
					/>
				</div>
				<button
					type='submit'
					className='sm:p-2 p-1 hvr text-[10px] sm:text-sm font-semibold border border-orange-400 text-orange-500 rounded-lg'>
					{t('Submit')}
				</button>
			</form>
		</div>
	);
};

export default SuggestionForm;
