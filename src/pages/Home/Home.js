import React from 'react';
// import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Wrapper, Content } from './style';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/context';

// const useStyles = makeStyles({
//     wrapper: {
//         height: '63.8vh',
//         background: '#E2E1E0',
//         padding: '7rem 28rem',

//     },
//     content: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         background: '#fff',
//         boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//         padding: '2rem'
//     },
// });

const Home = () => {
    const {
        handleSubmit
    } = useGlobalContext();
    // const classes = useStyles();
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