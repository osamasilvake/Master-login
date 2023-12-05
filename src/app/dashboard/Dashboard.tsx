import Main from './Main';
import Sidebar from './Sidebar';

const Dashboard = () => (
	<>
		<div className="flex xl:h-screen">
			<Sidebar />
			<Main />
		</div>
	</>
);

export default Dashboard;
