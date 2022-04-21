import { View } from 'react-native'
import React from 'react'
import { Props } from './types';

import { Container } from './styles';

const Separator = ({height, width}: Props) => {

    return <Container h={height} w={width} />;

};

export default Separator;
