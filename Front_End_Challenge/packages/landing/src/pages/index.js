import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/ModernTheme';
import ResetCSS from 'common/assets/css/style';
import {
	GlobalStyle,
	ContentWrapper,
} from 'containers/ModernTheme/modernTheme.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/ModernTheme/Navbar';
import Banner from 'containers/ModernTheme/Banner';
import Customer from 'containers/ModernTheme/Customer';
import News from 'containers/ModernTheme/News';
import Subscribe from 'containers/ModernTheme/Subscribe';
import Footer from 'containers/ModernTheme/Footer';
import Team from 'containers/ModernTheme/Team';

const BetterLessonLandingPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Head>
					<title>BetterLesson | Professional Coaching</title>
					<meta name="theme-color" content="#FF825C" />
					<meta name="Description" content="Professional Coaching" />

					{/* Load google fonts */}
					<link
						href="https://fonts.googleapis.com/css?family=B612:400,400i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<ResetCSS />
				<GlobalStyle />
				<ContentWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
						<DrawerProvider>
							<Navbar />
						</DrawerProvider>
					</Sticky>
					<Banner />
					<Team />
					<Customer />
					<News />
					<Subscribe />
					<Footer />
				</ContentWrapper>
			</Fragment>
		</ThemeProvider>
	);
};
export default BetterLessonLandingPage;
