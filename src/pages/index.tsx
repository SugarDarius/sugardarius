import * as React from 'react';
import { 
	Flex,
	Heading,
	Image,
	Stack,
	Link,
	Box,
	IconButton,
	Tooltip,
	useColorMode,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	Layout,
	Meta,
} from '../components';

export default function IndexPage(): React.ReactElement {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDarkMode = colorMode === 'dark';

	return (
		<Layout>
			<Meta title='Hello!' />
			<Flex
				position='relative'
				direction={['column', 'row']}
				width='100vw'
				height='100vh'
				alignItems='center'
				justifyContent='center'
			>
				<Flex position='relative' mr={[0, '0.625rem']} mb={['0.625rem', 0]}>
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
					padding={['0 0.625rem', 0]}
				>
					<Heading 
						as='h1'
						fontSize={['md', '1.875rem']}
						fontWeight={300}
						textAlign={['center', 'left']}
					>
						Aurélien Dupays Dexemple,<br />
						I'm a Senior Full Stack (Creative) Developer.
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
							spacing={['1.250rem', '1.5rem']}
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
									color='#1769ff'
								/>
							</Link>

							<Link
								href='https://twitter.com/azeldvin'
								isExternal
							>
								<FontAwesomeIcon
									icon={['fab', 'twitter']}
									size='2x'
									color='#1DA1F2'
								/>
							</Link>
						</Stack>
					</Flex>
				</Flex>
				<Box
					position='absolute'
					bottom='1.25rem'
					right='1.25rem'
					width='auto'
					height='auto'
					backgroundColor='red'
				>
					<Tooltip
						hasArrow
						label={`Use ${isDarkMode ? 'light' : 'dark'} mode`}
						placement='left'
						aria-label={`Use ${isDarkMode ? 'light' : 'dark'} mode`}
					>
						<IconButton
							icon={isDarkMode ? 'sun' : 'moon'}
							onClick={toggleColorMode}
							aria-label='Toggle Color Scheme mode button' 
						/>
					</Tooltip>
				</Box>
			</Flex>
		</Layout>
	);
}