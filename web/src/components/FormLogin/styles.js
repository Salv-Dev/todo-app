import styled from 'styled-components';

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    padding: 10px;
`;

export const Label = styled.label`
    display:flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #F5F5F5;
    border-radius: 5px;

    input {
        width: 100%;
        margin-left: 5px;
        letter-spacing: 1px;
        color: #9B9B9B;
        background: none;
        border: none;
        outline: none;
    }
`