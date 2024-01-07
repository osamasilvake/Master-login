import { FC, Suspense } from 'react';

import Loader from '@/components/common/loader/Loader';
import Sidebar from '@/components/frame/sidebar/Sidebar';

import { LayoutPageInterface } from '../../routes/Routes.interface';

const PrivateLayout: FC<LayoutPageInterface> = (props) => {
	const { Component } = props;

	return (
		<div className="flex">
			<Sidebar />
			<Suspense fallback={<Loader />}>
				<Component />
			</Suspense>
		</div>
	);
};
export default PrivateLayout;
