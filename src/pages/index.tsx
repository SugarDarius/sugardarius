import * as React from 'react';
import { PageProps } from 'gatsby';

import { Layout } from '../components';

export default function IndexPage(props: PageProps): React.ReactElement {
	return (
		<Layout>
			<h1>Welcome home!</h1>
		</Layout>
	);
}