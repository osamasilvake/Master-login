import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import MenuItem from './Sidebar.interface';

const SidebarItem: FC<{ item: MenuItem }> = ({ item }) => {
	const { path, Icon, label } = item;
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				`flex py-3 text-103 cursor-pointer border-l-8
                 ${isActive ? 'text-white' : 'border-transparent'}`
			}>
			<li className="flex gap-4 items-center px-6">
				<Icon className="h-5 w-5" />
				<p className="text-sm">{label}</p>
			</li>
		</NavLink>
	);
};

export default SidebarItem;
