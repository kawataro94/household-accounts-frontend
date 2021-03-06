import { useState, useEffect } from 'react';

import {
	useFetchExpensesByMembers,
	useFetchDailyExpenses,
	useFetchLendingByMembers,
	useFetchLendingRecords,
	useFetchMembers,
	useFetchMonthlyExpenses,
	useFetchMyProfile,
	useFetchRecords,
	useFetchTemplates,
} from '../hooks';
import { useCategories, usePlaces } from '../hooks/read';
import wrapPromise from './wrap-promise';

const apiHooks = {
	categories: () => useCategories(),
	dailyExpenses: () => useFetchDailyExpenses(),
	expensesByMembers: () => useFetchExpensesByMembers(),
	lendingRecords: () => useFetchLendingRecords(),
	lendingByMembers: () => useFetchLendingByMembers(),
	members: () => useFetchMembers(),
	monthlyExpenses: () => useFetchMonthlyExpenses(),
	myProfile: () => useFetchMyProfile(),
	places: () => usePlaces(),
	records: () => useFetchRecords(),
	templates: () => useFetchTemplates(),
};

function createResource({ keys }) {
	const resources = keys?.reduce((acc, key) => {
		const fetch = apiHooks[key];
		return {
			...acc,
			[key]: wrapPromise(fetch()),
		};
	}, {});

	return resources;
}

export const useResources = ({ keys }) => {
	const [resources, setResources] = useState({});

	useEffect(() => {
		setResources(createResource({ keys }));
	}, []);

	return { resources };
};
