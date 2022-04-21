import { View } from 'react-native'
import React, { useMemo } from 'react'

import { Container, SpacingIcon, Title } from './styles';
import { Props } from './types';
import { useTheme } from 'styled-components';

const Button = ({
    title, 
    onPress, 
    disabled, 
    icon, 
    outlined, 
    color, 
    textType='regular', 
    textColor}: Props) => {

        const {colors} = useTheme()

        const titleColor = useMemo(()=>{
            if(textColor) return textColor
            if(disabled) return colors.backdrop.main
            return outlined ? colors.backdrop.onMain : colors.background.main
        },[textColor, disabled, outlined, colors])
        return <Container 
                onPress={onPress} 
                disabled={disabled} 
                outlined={outlined || disabled} 
                color={color}
            >
                {!! icon && (
                    <>
                    {icon}
                    <SpacingIcon />
                    </>
                )}
                <Title color={titleColor} type={textType}>
                    {title}
                </Title>
            </Container>;
};

export default Button;