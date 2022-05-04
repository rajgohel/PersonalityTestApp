import React from 'react';
import { useGlobalContext } from '../../contexts/context';
import Modal from '../Modal/Modal';
import { Wrapper, Option, NextBtn, Loader } from './style';

const Questions = () => {
    const {
        waiting,
        loading,
        questions,
        index,
        nextQuestion,
        checkAnswer,
    } = useGlobalContext();
    if (waiting) {
        return <Loader />;
    }
    if (loading) {
        return <Loader />;
    }
    const { question, incorrect_answers, correct_answer } = questions[index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    console.log(tempIndex);
    if (tempIndex === 3) {
        console.log("in if");
        answers.push(correct_answer);
    } else {
        console.log("in else");
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
    }
    return (
        <Wrapper>
            <Modal />
            <h2>{question}</h2>
            {answers.map((answer, index) => {
                return (
                    <Option
                        key={index}
                        onClick={() => {
                            checkAnswer(correct_answer === answer);
                        }}
                    >
                        {answer}
                    </Option>
                );
            })}
            <NextBtn onClick={nextQuestion}>
                next question
            </NextBtn>
        </Wrapper>
    )
}

export default Questions