import { FC, Suspense } from 'react';

import Loader from '@/components/common/loader/Loader';
import { LayoutPageInterface } from '@/routes/Routes.interface';

const PublicLayout: FC<LayoutPageInterface> = (props) => {
	const { Component } = props;

	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Component />
			</Suspense>
		</div>
	);
};
export default PublicLayout;
