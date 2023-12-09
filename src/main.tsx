import './i18n/i18n';
import '@assets/scss/main.scss';
import '@assets/scss/tailwind.scss';
import '@assets/fonts/index';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
