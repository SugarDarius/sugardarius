import * as React from 'react';
import { PageProps } from 'gatsby';

import { Layout } from '../components';

export default function NotFoundPage(props: PageProps): React.ReactElement {
	return (
    	<Layout>
			<h1>404</h1>
		</Layout>
	);
}