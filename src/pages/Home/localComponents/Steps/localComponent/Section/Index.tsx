import React from "react";
import { View } from "react-native";
import Text from "../../../../../../components/Text/Index";

import {Props} from './types'; 
import { Container, RightCevron, Row } from "./styles";
import { useTheme } from "styled-components";
import Separator from "../../../../../../components/Separator/Index";

import icon from '../../../../../../../assets/icons/chevron-left.png';

const Section = ({leftNode}: Props) => {
    const {colors} = useTheme();

    return <Container>
        {leftNode}
        <Row>
            <Text type="semiBold">ver todos</Text>
            <Separator width={20} />
            <RightCevron source={icon} style={{tintColor:colors.primary.main}}/>
        </Row>
    </Container>;

};

export default Section;