import * as React from 'react';
import { useKey } from 'react-use';
import {
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/free-solid-svg-icons';

const keysMap: { [key: number]: string | IconName } = {
    65: 'A',
    66: 'B',
    37: 'arrow-circle-left',
    39: 'arrow-circle-right',
    38: 'arrow-circle-up',
    40: 'arrow-circle-down',
};

export type CodeProps = {
    onSuccess: () => void;
};

export function Code({ onSuccess }: CodeProps) {
    const availablesKeys: number[] = [37, 39, 38, 40, 65, 66];
    const komando: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    const [ kcode, setKcode ] = React.useState<number[]>([]);

    useKey((event: KeyboardEvent): boolean => {
        const keyCode = event.keyCode || event.which;

        return availablesKeys.includes(keyCode);
    }, (event: KeyboardEvent) => {
        const keyCode = event.keyCode || event.which;

        if (kcode.length < 10) {
            setKcode([ ...kcode, keyCode ]);
        }
    }, undefined, [kcode]);

    React.useEffect(() => {
        if (kcode.length === 10) {
            const isKomando = kcode.every((k: number, index: number): boolean => {
                return k === komando[index];
            });

            if (isKomando) {
                onSuccess();
            }
            else {
                setKcode([]);
            }
        }
    }, [kcode]);

    return (
        <Flex
            position='relative'
            direction='row'
            alignItems='center'
            justifyContent='center'
        >
            {
                kcode.length > 0 ? (
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={['1.250rem', '1.5rem']}
                    >
                        {
                            kcode.map((item: number, index: number) => {
                                return (
                                    <Text
                                        key={`kcode-item-${item}-${index}`}
                                        color='white'
                                        fontWeight={500}
                                        fontSize='6xl'
                                        as='span'
                                    >
                                        {
                                            [65, 66].includes(item) ? keysMap[item] : (
                                                <FontAwesomeIcon
                                                    icon={['fas', keysMap[item] as IconName]}
                                                    color='#ffffff'
                                                />
                                            )
                                        }
                                    </Text> 
                                )
                            })
                        }
                    </Stack>
                ) : (
                    <Heading 
                        as='h2' 
                        size='xl'
                        opacity={0.5}
                        color='white'
                        fontWeight={300}
                    >
                        Gradius needed to be tested.
                    </Heading>
                )
            }
        </Flex>
    );
}