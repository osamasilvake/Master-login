import { CiSearch } from 'react-icons/ci';

const SearchInput = () => (
	<>
		<div className="relative">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="search"
				className="w-full shadow-sm placeholder:text-sm border-0 px-8 rounded-lg p-2
			focus:outline-none focus:ring-gray-300 focus:border-gray-300"
			/>
			<CiSearch className="h-5 w-4 absolute top-3 left-3" />
		</div>
	</>
);
export default SearchInput;
