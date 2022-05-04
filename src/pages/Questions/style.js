import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    max-width: 1170px;
    margin: 4rem auto;
    background: rgba(255, 255, 255, 0.664);
    border-radius: 0.25rem;
    padding: 3rem;
`;

export const Option = styled.button`
    display: block;
    width: 50%;
    margin: 0.75rem auto;
    background: #fcb69f;
    border-radius: 1rem;
    border-color: transparent;
    color: #222;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem;
    transition: all 0.3s linear;
`;

export const NextBtn = styled.button`
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

export const Loader = styled.div`
    @keyframes spinner {
        to {
        transform: rotate(360deg);
        }
    }
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 3px solid #ffecd2;
    border-top-color: #fcb69f;
    animation: spinner 0.6s linear infinite;
`;