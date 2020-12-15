import styled from 'styled-components';

export const Container = styled.div`
    padding: 100px 10% 0 10%;
`;

export const TaskContainer = styled.ul`
    margin-top: 20px;
`;

export const MainContainer = styled.main`
    @media (min-width: 900px) {
        padding-left: 40%;
    }
`

export const Title = styled.h4`
    color: ${props => props.theme.grayTextColor};
    font-weight: normal;
    font-size: 0.7rem;
`