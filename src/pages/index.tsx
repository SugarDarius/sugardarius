import * as React from 'react';
import { PageProps } from 'gatsby';
import { 
	Flex,
	Text,
} from '@chakra-ui/core';

import { 
	Layout,
	Meta,
} from '../components';

export default function IndexPage(props: PageProps): React.ReactElement {
	return (
		<Layout>
			<Meta title='Hello!' />
			<Flex
				position='relative'
				direction='column'
				width='100vw'
				height='100vh'
				alignItems='center'
				justifyContent='center'
			>
				<Text fontSize='3rem'>
					Hello!<br />
					I'm Aurélien Dupays Dexemple
				</Text>
			</Flex>
		</Layout>
	);
}