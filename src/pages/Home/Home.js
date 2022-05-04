import React from 'react';
import Button from '@mui/material/Button';
import { Wrapper, Content } from './style';
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
                <Button variant="contained" onClick={() => { btnClick() }}>Get started</Button>
            </Content>
        </Wrapper>
    )
}

export default Home