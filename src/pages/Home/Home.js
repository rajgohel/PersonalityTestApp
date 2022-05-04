import React from 'react';
import { Wrapper, Content, StartBtn } from './style';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/context';

const Home = () => {
    const {
        handleSubmit
    } = useGlobalContext();
    const navigate = useNavigate();
    const btnClick = () => {
        handleSubmit();
        navigate('/questions');
    }
    return (
        <Wrapper>
            <Content>
                <h2>Who Am I?</h2>
                <p>An in-depth personality test designed by psychologist</p>
                <StartBtn onClick={() => { btnClick() }}>Get started</StartBtn>
            </Content>
        </Wrapper>
    )
}

export default Home