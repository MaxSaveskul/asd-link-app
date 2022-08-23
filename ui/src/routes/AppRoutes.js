import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

import SharedLayout from './SharedLayout';
import MainPage from '../pages/MainPage/MainPage';
import ValidatePage from '../pages/ValidatePage/ValidatePage';
import DocsPage from '../pages/DocsPage/DocsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<MainPage />} />
					<Route path='/validate-link' element={<ValidatePage />} />
					<Route path='/docs' element={<DocsPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;