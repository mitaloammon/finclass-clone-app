import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const RightCevron = styled.Image`
    transform: rotateZ(180deg);
    width: 11px;
    height: 11px;
`;