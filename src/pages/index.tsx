import * as React from 'react';
import { useKey } from 'react-use';
import { 
	Flex,
	Heading,
	Stack,
	Link,
	Box,
	IconButton,
	Tooltip,
	useColorMode
} from '@chakra-ui/react';
import {
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../icons/library';
import { getSocialLinks } from '../data';
import {
	Meta,
	CodeOverlay,
	Code,
	FiberCanvas,
} from '../components';
import { useSite } from '../hooks';

export default function IndexPage(): React.ReactElement {
	const site = useSite();
	const { colorMode, toggleColorMode } = useColorMode();

	const [showCodeOverlayState, setShowCodeOverlayState] = React.useState<boolean>(false);
	const [codeSuccess, setCodeSuccessState] = React.useState<boolean>(false);
	
	useKey(' ', () => {
		if(!codeSuccess) {
			setShowCodeOverlayState(true);
		}
	}, undefined, [codeSuccess]);

	useKey('Escape', () => {
		if (showCodeOverlayState) {
			setShowCodeOverlayState(false);
		}
		else if (codeSuccess) {
			setCodeSuccessState(false);
		}
	}, undefined, [showCodeOverlayState, codeSuccess]);

	const isDarkMode = colorMode === 'dark';
	const iconDarkModeBaseColor = '#ffffff';

	const socialLinks = getSocialLinks(isDarkMode, iconDarkModeBaseColor);
	const onCodeSuccess = () => {
		setShowCodeOverlayState(false);
		setCodeSuccessState(true);
	};

	return (
		<React.Fragment>
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
					{
						codeSuccess ? (
							<FiberCanvas isDarkMode />
						) : null
					}
					<Flex 
						position='relative' 
						mr={[0, '0.625rem']} 
						mb={['0.625rem', 0]}
					>
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
									socialLinks.map(({ id, icon, color, ...linkAtts }) => {
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
							<IconButton
								icon={isDarkMode ? <SunIcon />: <MoonIcon />}
								onClick={toggleColorMode}
								aria-label='Toggle Color Scheme mode button'
								isRound
							/>
						</Tooltip>
					</Box>
					{
						showCodeOverlayState ? (
							<CodeOverlay>
								<Code
									onSuccess={() => {
										onCodeSuccess();
									}}
								/>
							</CodeOverlay>
						) : null
					}
				</Flex>
		</React.Fragment>
	);
}