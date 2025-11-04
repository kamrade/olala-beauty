export interface IMainMenu {
	link: string;
	label: string;
}

export interface ILayout {
	mainMenu: IMainMenu[];
}

export type ILanguages = 'en' | 'ua' | 'fr';

export const languages: ILanguages[] = [
	'en', 'ua', 'fr'
]