import styled from 'styled-components';

export const Progress = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4px;
    background-color: ${props => props.theme.grayBackground};
`;

export const Bar = styled.div`
    width: calc(50% - 31.22px);
    height: 100%;
    background-color: ${props => props.theme.main};
`;

export const Percent = styled.span`
    font-size: 0.6rem;
    padding: 0 5px;
    color: ${props => props.theme.placeholderColor};
    background-color: ${props => props.theme.whiteColor};
`;