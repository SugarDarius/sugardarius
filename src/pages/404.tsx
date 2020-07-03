import * as React from 'react';
import { PageProps } from 'gatsby';

import { 
	Layout,
	Meta
} from '../components';

export default function NotFoundPage(props: PageProps): React.ReactElement {
	return (
    	<Layout>
			<Meta title='404!' />
			<h1>404</h1>
		</Layout>
	);
}