import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90vw;
    max-width: 500px;
    margin: 4rem auto;
    background: rgba(255, 255, 255, 0.664);
    border-radius: 0.25rem;
    padding: 3rem;
`;

export const StartBtn = styled.button`
    border-radius: 1rem;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    display: block;
    width: 35%;
    margin-left: auto;
    margin-top: 2rem;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing:  0.1rem;
    font-size: 1rem;
    background: #ebdbc3;
    color: #222;
    transition: all 0.3s linear;
    cursor: pointer;
`;