import { AiOutlineHome } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineFolderArrowDown } from 'react-icons/hi2';
import { IoFolderSharp } from 'react-icons/io5';

import appRoutes from '@/routes/Routes.path';

import { SidebarType } from './Sidebar.enum';
import MenuItem from './Sidebar.interface';

export const SidebarList: MenuItem[] = [
	{
		path: appRoutes.HOME,
		Icon: AiOutlineHome,
		label: SidebarType.HOME
	},
	{
		path: appRoutes.SCREENS.MY_FILES.MAIN,
		Icon: FaRegFolderOpen,
		label: SidebarType.MY_FILES
	},
	{
		path: appRoutes.SCREENS.RECENT_FILES.MAIN,
		Icon: IoFolderSharp,
		label: SidebarType.RECENT_FILES
	},
	{
		path: appRoutes.SCREENS.SHARED_FILES.MAIN,
		Icon: FiUsers,
		label: SidebarType.SHARED_FILES
	},
	{
		path: appRoutes.SCREENS.FILE_REQUEST.MAIN,
		Icon: HiOutlineFolderArrowDown,
		label: SidebarType.FILE_REQUEST
	},
	{
		path: appRoutes.SCREENS.TRASH.MAIN,
		Icon: BsTrash,
		label: SidebarType.TRASH
	}
];
