import { serverUrl } from '../../.env/resources';
import { httpClient } from '../setting'

function useFetchLendingByMembers() {
	return httpClient.get(`http://${serverUrl}/member/irregular_expenses/monthly_by_members`);
}

export default useFetchLendingByMembers;