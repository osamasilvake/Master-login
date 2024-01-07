import { lazy } from 'react';

import appRoutes from '@/routes/Routes.path';

import { RoutesInterface } from '../../routes/Routes.interface';
import FileRequest from '../file-request/FileRequest';
import MyFiles from '../my-files/MyFiles';
import RecentFiles from '../recent-files/RecentFiles';
import SharedFiles from '../shared-files/SharedFiles';
import Trash from '../trash/Trash';

const Dashboard = lazy(() => import('./Dashboard'));

const dashboardRoutes: RoutesInterface[] = [
	{
		path: appRoutes.HOME,
		component: Dashboard
	},
	{
		path: appRoutes.SCREENS.MY_FILES.MAIN,
		component: MyFiles
	},
	{
		path: appRoutes.SCREENS.RECENT_FILES.MAIN,
		component: RecentFiles
	},
	{
		path: appRoutes.SCREENS.SHARED_FILES.MAIN,
		component: SharedFiles
	},
	{
		path: appRoutes.SCREENS.FILE_REQUEST.MAIN,
		component: FileRequest
	},
	{
		path: appRoutes.SCREENS.TRASH.MAIN,
		component: Trash
	}
];
export default dashboardRoutes;
