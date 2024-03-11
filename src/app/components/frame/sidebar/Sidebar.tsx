/* eslint-disable jsx-a11y/label-has-associated-control */
import { FiLogOut } from 'react-icons/fi';
import { LuMenu } from 'react-icons/lu';

import { persistor } from '@/store';

import { SidebarList } from './Sidebar.list';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
	const handleLogout = () => {
		persistor.purge();
	};

	return (
		<div>
			<label
				htmlFor="nav"
				className="md:hidden cursor-pointer p-1 mt-3 md:mt-0 absolute left-6 rounded-md bg-white shadow inline-flex">
				<LuMenu className="h-7 w-7" />
			</label>
			<input id="nav" type="checkbox" className="hidden" />

			<label htmlFor="nav" className="hidden backdrop fixed inset-0 z-10 bg-black/30 md:bg-transparent" />
			<aside className="w-52 pt-6 h-full min-h-screen fixed -left-52 top-0 bottom-0 z-20 transition-all bg-102 md:static">
				<nav className="sticky top-6">
					<h1 className="font-semibold text-white pt-5 px-9 pb-5 text-xl">
						Cl<span className="text-105">o</span>ud<span className="text-105 pl-1">io</span>
					</h1>
					<ul className="pt-6 space-y-2">
						{SidebarList?.map((item) => <SidebarItem key={item.path} item={item} />)}
					</ul>
					<div className="flex items-center gap-2 px-6 pt-14">
						<FiLogOut className="h-12 w-7 text-101 cursor-pointer" onClick={handleLogout} />
						<p className="text-white text-sm">Log out</p>
					</div>
				</nav>
			</aside>
		</div>
	);
};
export default Sidebar;
