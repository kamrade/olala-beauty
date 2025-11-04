import type { LayoutLoad } from './$types';
import type { ILanguages, ILayout } from '$lib/i18n/00-layout/layout.type';
import { contentEn, contentUa, contentFr } from '$lib/i18n/layout';

export const load: LayoutLoad = async ({ params }) => {

	const lang: ILanguages = (params?.lang || "en") as ILanguages;

	console.log("Current lang:", lang);

	const layoutDataModule: ILayout | null =
		(lang === 'en') ? contentEn :
			(lang === 'fr') ? contentFr :
				(lang === 'ua') ? contentUa : null;


	return {
		lang,
		layout: layoutDataModule
	}

}