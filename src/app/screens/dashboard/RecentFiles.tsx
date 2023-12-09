import { BsThreeDots } from 'react-icons/bs';
import { CiImageOn } from 'react-icons/ci';

const RecentFiles = () => (
	<>
		<div className="flex justify-between mt-6">
			<p className="font-semibold text-106">Recent Files</p>
			<span className="font-semibold text-106">View All</span>
		</div>

		<div className="flex justify-between  flex-col mt-4 mb-3 px-4 sm:px-0 sm:flex-row">
			<div>
				<p className="text-106 pb-3 sm:pb-0">Name</p>
			</div>
			<div className="flex justify-between gap-16 sm:justify-start">
				<p className="text-106 w-28">Overviews</p>
				<p className="text-106 w-32">Last Modified</p>
				<p className="w-5" />
			</div>
		</div>

		<div className="flex justify-between flex-col bg-white rounded-md mb-3 sm:flex-row sm:items-center">
			<div className="flex items-center px-3 py-3 gap-3">
				<CiImageOn className="w-7 h-7" />
				<h6 className="font-semibold text-106 text-sm">Travel page</h6>
			</div>
			<div className="flex justify-between gap-16 px-4 py-3 sm:py-0 sm:justify-start">
				<p className="font-semibold text-106 text-sm w-28">5 members</p>
				<p className="font-semibold text-106 text-sm w-28">May 7, 2020</p>
				<div className="w-5 flex items-center">
					<BsThreeDots className="text-106" />
				</div>
			</div>
		</div>
		<div className="flex justify-between flex-col bg-white rounded-md  mb-3 sm:flex-row sm:items-center">
			<div className="flex items-center px-3 py-3 gap-3">
				<CiImageOn className="w-7 h-7" />
				<h6 className="font-semibold text-106 text-sm">Travel page</h6>
			</div>
			<div className="flex justify-between gap-16 px-4 py-3 sm:py-0 sm:justify-start ">
				<p className="font-semibold text-106 text-sm w-28">5 members</p>
				<p className="font-semibold text-106 text-sm w-28">May 7, 2020</p>
				<div className="w-5 flex items-center">
					<BsThreeDots className="text-106" />
				</div>
			</div>
		</div>
		<div className="flex justify-between flex-col bg-white rounded-md  mb-3 sm:flex-row sm:items-center">
			<div className="flex items-center px-3 py-3 gap-3">
				<CiImageOn className="w-7 h-7" />
				<h6 className="font-semibold text-106 text-sm">Travel page</h6>
			</div>
			<div className="flex justify-between gap-16 px-4 py-3 sm:py-0 sm:justify-start">
				<p className="font-semibold text-106 text-sm w-28">5 members</p>
				<p className="font-semibold text-106 text-sm w-28">May 7, 2020</p>
				<div className="w-5 flex items-center">
					<BsThreeDots className="text-106" />
				</div>
			</div>
		</div>
	</>
);
export default RecentFiles;
