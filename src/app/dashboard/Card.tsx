import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai';
import { AiFillFolder } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Card = () => (
	<>
		<div className="flex justify-between mt-4">
			<h6 className=" font-semibold text-106">Recently Used</h6>
			<div className="flex gap-2">
				<a href="" className="text-xl">
					<AiFillAppstore />
				</a>
				<a href="" className="text-xl">
					<AiOutlineMenu />
				</a>
			</div>
		</div>

		<div className="flex flex-col flex-wrap md:flex-row gap-4 mt-5">
			<div className="bg-white rounded-xl py-6 px-5 md:w-48 shadow-sm">
				<div className="flex justify-end -mt-2 -mr-3">
					<BsThreeDotsVertical className="h-4 w-4" />
				</div>
				<div className="flex items-center gap-6 pb-5">
					<AiFillFolder className="h-11 w-9 pt-2 text-104" />
					<div className="-space-x-2 pt-3 flex">
						<img
							className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<img
							className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
				</div>
				<h3 className="text-sm text-106 font-semibold">App Project</h3>
				<p className="text-xs text-gray-400 pt-1">Lorem,ipsum</p>
			</div>
			<div className="bg-white rounded-xl py-6 px-5 md:w-48 shadow-sm">
				<div className="flex justify-end -mt-2 -mr-3">
					<BsThreeDotsVertical className="h-4 w-4" />
				</div>
				<div className="flex items-center gap-6 pb-5">
					<AiFillFolder className="h-11 w-9 pt-2 text-104" />
					<div className="-space-x-2 pt-3 flex">
						<img
							className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<img
							className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
				</div>
				<h3 className="text-sm text-106 font-semibold">App Project</h3>
				<p className="text-xs text-gray-400 pt-1">Lorem,ipsum</p>
			</div>
			<div className="bg-white rounded-xl py-6 px-5 md:w-48 shadow-sm">
				<div className="flex justify-end -mt-2 -mr-3">
					<BsThreeDotsVertical className="h-4 w-4" />
				</div>
				<div className="flex items-center gap-6 pb-5">
					<AiFillFolder className="h-11 w-9 pt-2 text-104" />
					<div className="flex -space-x-2 pt-3">
						<img
							className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<img
							className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
				</div>
				<h3 className="text-sm text-106 font-semibold">App Project</h3>
				<p className="text-xs text-gray-400 pt-1">Lorem,ipsum</p>
			</div>
		</div>
	</>
);
export default Card;
