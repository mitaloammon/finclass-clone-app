import React from 'react';
import { TypographyType } from 'styled-components';

export interface Props {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    color?: string;
    textColor?: string;
    outlined?: boolean;
    textType?: TypographyType;
}

export type ContainerProps = Pick<Props, "outlined" | "disabled" | "color">;

export interface TitleProps {
    type: TypographyType;
    color: string;
}