import QAItem from '@/components/MainPage/QAItem';
import { faqData, possibleLanguages } from '@/constants/contants';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const QuestionsAnswers = () => {
	const { language } = useTheme();
	const { t } = useTranslation();
	return (
		<div className='w-full'>
			<div className='border-b pb-4 text-[10px] sm:text-sm font-semibold'>
				{t('questionsSectionTitle')}
			</div>
			<div>
				{faqData[possibleLanguages[language] ? language : 'lv'].map((faq, index) => (
					<QAItem key={`${faq.question}-${index}`} question={faq.question} answer={faq.answer} />
				))}
			</div>
		</div>
	);
};

export default QuestionsAnswers;
