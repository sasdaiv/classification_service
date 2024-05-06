import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import 'dayjs/locale/lv';
import 'dayjs/locale/en';

import translationsLv from '@/locales/lv/translation.json';
import translationsEn from '@/locales/en/translation.json';

i18n
	.use(initReactI18next)
	.init({
		resources: {
			lv: {
				translation: translationsLv,
			},
			en: {
				translation: translationsEn,
			},
		},
		fallbackLng: 'lv',
		lng: localStorage.getItem('language') || 'lv',
		interpolation: {
			escapeValue: false,
		},
	})
	.then()
	.catch((err) => console.error(err));

export default i18n;
