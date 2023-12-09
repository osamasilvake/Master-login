import { Outlet } from 'react-router-dom';

import Sidebar from './frame/sidebar/Sidebar';

const App = () => (
	<div className="flex xl:h-screen">
		<Sidebar />
		<Outlet />
	</div>
);
export default App;
