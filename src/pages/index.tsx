import * as React from 'react';
import { 
	Flex,
	Heading,
	Image,
	Stack,
	Link,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	Layout,
	Meta,
} from '../components';

export default function IndexPage(): React.ReactElement {
	return (
		<Layout>
			<Meta title='Hello!' />
			<Flex
				position='relative'
				direction='row'
				width='100vw'
				height='100vh'
				alignItems='center'
				justifyContent='center'
			>
				<Flex position='relative' mr='0.625rem'>
					<Image
						objectFit='cover'
						src='/images/logo.png'
						alt='Aurélien Dupays Dexemple logo'
						width='180px'
					/>
				</Flex>
				<Flex 
					position='relative'
					direction='column'
				>
					<Heading as='h1' fontWeight={300}>
						Aurélien Dupays Dexemple<br />
						I'm a Senior Full Stack (Creative) Developer
					</Heading>
					<Flex
						position='relative'
						direction='row'
						alignItems='center'
						justifyContent='flex-start'
						mt='1.25rem'
					>
						<Stack
							direction='row'
							alignItems='center'
							spacing='1.5rem'
						>
							<Link
								href='https://www.linkedin.com/in/aureliendupaysdexemple/'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'linkedin-in']}
									size='2x'
								/>
							</Link>

							<Link
								href='https://github.com/SugarDarius'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'github']}
									size='2x'
								/>
							</Link>

							<Link
								href='https://medium.com/@aureliendupdex'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'medium']}
									size='2x'
								/>
							</Link>

							<Link
								href='https://dev.to/azeldvin'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'dev']}
									size='2x'
								/>
							</Link>

							<Link
								href='https://www.behance.net/dupaysaurec9ea'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'behance']}
									size='2x'
								/>
							</Link>

							<Link
								href='https://twitter.com/azeldvin'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'twitter']}
									size='2x'
								/>
							</Link>
						</Stack>
					</Flex>
				</Flex>
			</Flex>
		</Layout>
	);
}