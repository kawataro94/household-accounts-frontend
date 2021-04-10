import { serverUrl } from '../../.env/resources';
import { httpClient } from '../setting';

function useCreateTemplate() {
	const create = (template) => {
		return httpClient.post(`${serverUrl}/member/config/templates`, template);
	};
	return { create };
}

export default useCreateTemplate;
