import * as React from 'react';
import { Link } from 'gatsby';
import { 
	Flex, 
	Link as CLink, 
	Button,
} from '@chakra-ui/react';

import '../icons/library';
import { 
	Meta
} from '../components';

export default function NotFoundPage(): React.ReactElement {
	return (
    	<React.Fragment>
			<Meta title='404!' />
			<Flex
				position='relative'
				direction='column'
				width='100vw'
				height='100vh'
				alignItems='center'
				justifyContent='center'
			>
				<img
					src='/images/not-found-illu.png'
					alt='404 Not Found illustration'
					width='75%'
					style={{ objectFit: 'cover' }}
				/>
				<CLink
					// @ts-ignore
					as={Link} 
					to='/' 
					mt='1rem'
					style={{ textDecoration: 'none' }}
				>
					<Button>
						Go to the home page!
					</Button>
				</CLink>
			</Flex>
		</React.Fragment>
	);
}