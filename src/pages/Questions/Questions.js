import React from 'react';
import { useGlobalContext } from '../../contexts/context';
import Modal from '../Modal/Modal';
import { Wrapper, Option, NextBtn } from './style';

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
        return <></>;
    }
    if (loading) {
        return <></>;
    }
    const { question, incorrect_answers, correct_answer } = questions[index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
        answers.push(correct_answer);
    } else {
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
            <NextBtn className="next-question" onClick={nextQuestion}>
                next question
            </NextBtn>
        </Wrapper>
    )
}

export default Questions