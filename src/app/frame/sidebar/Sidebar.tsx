import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineFolder } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineFolderArrowDown } from 'react-icons/hi2';
import { PiFolderStarLight } from 'react-icons/pi';

import { router } from '@/router';
import { RouterEnum } from '@/router/Router.enum';

const Sidebar = () => (
	<>
		<aside className="hidden md:block w-48 bg-102">
			<nav className="sticky top-2">
				<h1 className="font-semibold text-white pt-5 px-9 pb-5 text-xl">
					Cl<span className="text-105">o</span>ud<span className="text-105 pl-1">io</span>
				</h1>
				<ul className="pt-6 space-y-1">
					<li
						onClick={() => router.navigate(RouterEnum.DASHBOARD)}
						className="flex items-center gap-4 border-l-4 px-7 py-3 text-white cursor-pointer">
						<AiOutlineHome className="h-5 w-5" />
						<p className="text-sm">Home</p>
					</li>
					<li
						onClick={() => router.navigate(RouterEnum.MY_FILES)}
						className="flex items-center gap-4 px-7 py-3 text-103 cursor-pointer">
						<AiOutlineFolder className=" h-5 w-6" />
						<p className="text-sm">My Files</p>
					</li>
					<li className="flex items-center gap-4 px-7 py-3 text-103 cursor-pointer">
						<PiFolderStarLight className="h-6 w-5" />
						<p className="text-sm">Recent Files</p>
					</li>
					<li className="flex items-center gap-4 px-7 py-3 text-103 cursor-pointer">
						<FiUsers className="h-4 w-5" />
						<p className="text-sm">Shared Files</p>
					</li>
					<li className="flex items-center gap-4 px-7 py-3 text-103 cursor-pointer">
						<HiOutlineFolderArrowDown className=" h-5 w-5" />
						<p className="text-sm">File request</p>
					</li>
					<li className="flex items-center gap-4 px-7 py-3 text-103 cursor-pointer">
						<BsTrash className="h-4 w-5" />
						<p className="text-sm">Trash</p>
					</li>
				</ul>
			</nav>
		</aside>
	</>
);
export default Sidebar;
