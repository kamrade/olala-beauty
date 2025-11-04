import type { PageServerLoad } from 'types/src/routes';

export const load: PageServerLoad = async ({ fetch }) => {

  let res = await fetch('http://49.13.200.138:3001/api/categories');
  let result = await res.json();

  console.log(result?.docs?.length);

	return {
		secret_post: {
      secret_title: 'Secret Title'
    }
	};
};