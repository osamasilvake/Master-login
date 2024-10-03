import Card from './Card';
import RecentFiles from './RecentFiles';
import SearchInput from './SearchInput';

const Dashboard = () => (
	<main className="bg-101 px-5 flex-1 pt-16 md:pt-5">
		<SearchInput />
		<Card />
		<RecentFiles />
	</main>
);
export default Dashboard;
