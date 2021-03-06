import { useCallback } from 'react';
import Moment from 'moment';

import { serverUrl } from '../../.env/resources';
import { httpClient } from '../setting';

function useCreateLendingRecord({ me, categories, places, members }) {
	const create = useCallback(
		({ title, date, cost, category, place, paidBy }) => {
			const { id: categoryId } = categories.find(({ name }) => name === category);
			const { id: placeId } = places.find(({ name }) => name === place);
			const { id: memberId } = members.find(({ account }) => account === paidBy);
			const body = {
				title,
				date: Moment(date).format('YYYY-MM-DD'),
				cost,
				categoryId,
				placeId,
				memberId,
				createBy: me,
			};

			return httpClient.post(`${serverUrl}/member/lending_records`, body);
		},
		[categories, places, members]
	);
	return { create };
}

export default useCreateLendingRecord;
