import { useSelector } from 'react-redux';

import { selectAuth } from '@/slices/auth/Auth.slice';

import Card from './Card';
import RecentFiles from './RecentFiles';
import SearchInput from './SearchInput';

const Dashboard = () => {
	const auth = useSelector(selectAuth);
	// const dispatch = useDispatch<AppDispatch>(); // generic <AppDispatch>
	console.log(auth);

	return (
		<main className="bg-101 px-5 flex-1 pt-5">
			<SearchInput />
			<Card />
			<RecentFiles />
		</main>
	);
};
export default Dashboard;
