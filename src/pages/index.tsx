import * as React from 'react';
import { 
	Flex,
	Heading,
	Stack,
	Link,
	Box,
	IconButton,
	Tooltip,
	DarkMode,
	LightMode,
	useColorMode,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	Layout,
	Meta,
} from '../components';
import { useSite } from '../hooks';

export default function IndexPage(): React.ReactElement {
	const site = useSite();

	const { colorMode, toggleColorMode } = useColorMode();
	const [isDarkMode, setDarkState] = React.useState<boolean>(false);
	React.useEffect(() => {
		setDarkState(colorMode === 'dark');
	}, [colorMode]);

	// gatsby build issue workaround with chakra-ui
	const WrapperColorSchemeMode = isDarkMode ? DarkMode : LightMode;

	const links = [
		{
			id: 'linkedin',
			href: 'https://www.linkedin.com/in/aureliendupaysdexemple/',
			alt: 'LinkedIn - Aurélien Dupays Dexemple', 
			isExternal: true,
			icon: ['fab', 'linkedin-in'],
			color: '#2867B2'
		},
		{
			id: 'github',
			href: 'https://github.com/SugarDarius',
			alt: 'GitHub - Aurélien Dupays Dexemple',
			isExternal: true,
			icon: ['fab', 'github']
		},
		{
			id: 'dev',
			href: 'https://dev.to/azeldvin',
			alt: 'DEV - Aurélien Dupays Dexemple',
			isExternal: true,
			icon: ['fab', 'dev']
		},
		{
			id: 'medium',
			href: 'https://medium.com/@aureliendupdex',
			alt: 'Medium - Aurélien Dupays Dexemple',
			isExternal: true,
			icon: ['fab', 'medium']
		},
		{
			id: 'behance',
			href: 'https://www.behance.net/dupaysaurec9ea',
			alt: 'Behance - Aurélien Dupays Dexemple',
			isExternal: true,
			icon: ['fab', 'behance'],
			color: '#1769ff'
		},
		{
			id: 'twitter',
			href: 'https://twitter.com/azeldvin',
			alt: 'Twitter - Aurélien Dupays Dexemple',
			isExternal: true,
			icon: ['fab', 'twitter'],
			color: '#1DA1F2'
		},
	];

	return (
		<Layout>
			<Meta
				title='Hello!'
				titleTemplate={site.siteMetadata.title}
				description={site.siteMetadata.description}
			/>
			<Flex
				position='relative'
				direction={['column', 'row']}
				width='100vw'
				height='100vh'
				alignItems='center'
				justifyContent='center'
			>
				<Flex position='relative' mr={[0, '0.625rem']} mb={['0.625rem', 0]}>
					<img
						src='/images/logo.png'
						alt='Aurélien Dupays Dexemple logo'
						style={{
							width: '180px',
							height: '180px',
							objectFit: 'cover' 
						}}
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
							{
								links.map(({ id, icon, color, ...linkAtts }) => {
									return (
										<Link
											key={id} 
											{...linkAtts}
										>
											<FontAwesomeIcon
												size='2x'
												// @ts-ignore
												icon={icon}
												color={color}
											/>
										</Link>
									);
								})
							}
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
						<WrapperColorSchemeMode>
							<IconButton
								icon={isDarkMode ? 'sun' : 'moon'}
								onClick={toggleColorMode}
								aria-label='Toggle Color Scheme mode button'
								isRound
							/>
						</WrapperColorSchemeMode>
					</Tooltip>
				</Box>
			</Flex>
		</Layout>
	);
}