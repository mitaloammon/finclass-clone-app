import React from "react";
import { View } from 'react-native';
import Step from "./localComponent/Step/Index";

import {Container} from './styles';
import { Props } from "./types";

const Steps = ({index}: Props) => {

    return <Container>
        <Step isActive={index===0}></Step>
        <Step isActive={index===1}></Step>
        <Step isActive={index===2}></Step>
    </Container>
};

export default Steps;