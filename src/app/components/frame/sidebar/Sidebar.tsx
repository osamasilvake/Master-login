import { FiLogOut } from 'react-icons/fi';

import { persistor } from '@/store';

import { SidebarList } from './Sidebar.list';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
	const handleLogout = () => {
		persistor.purge();
	};

	return (
		<aside className="hidden md:block w-52 bg-102">
			<nav className="sticky top-0 h-screen">
				<h1 className="font-semibold text-white pt-5 px-9 pb-5 text-xl">
					Cl<span className="text-105">o</span>ud<span className="text-105 pl-1">io</span>
				</h1>
				<ul className="pt-6 space-y-2">{SidebarList?.map((item) => <SidebarItem key={item.path} item={item} />)}</ul>
				<div className="flex items-center gap-2 px-6 pt-14">
					<FiLogOut className="h-12 w-7 text-101 cursor-pointer" onClick={handleLogout} />
					<p className="text-white text-sm">Log out</p>
				</div>
			</nav>
		</aside>
	);
};
export default Sidebar;
