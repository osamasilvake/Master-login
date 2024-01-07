import './i18n/i18n';
import '@assets/scss/main.scss';
import '@assets/scss/tailwind.scss';
import '@assets/fonts/index';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '@/App';
import Loader from '@/components/common/loader/Loader';
import { persistor, store } from '@/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>
);
