import axios from "axios";
import React, { useState, useContext } from "react";
import { BASE_URL } from "../constants/apiConstants";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchQuestions = async (url) => {
        const response = await axios(url).catch((err) => console.log(err));
        if (response) {
            const data = response.data.results;
            if (data.length > 0) {
                setQuestions(response.data.results);
                setLoading(false);
                setError(false);
            } else {
                setLoading(true);
                setError(true);
            }
        } else {
            setLoading(false);
        }
    };

    const nextQuestion = () => {
        setIndex((oldIndex) => {
            const index = oldIndex + 1;
            if (index > questions.length - 1) {
                openModal();
                return 0;
            } else {
                return index;
            }
        });
    };

    const checkAnswer = (value) => {
        if (value) {
            setCorrect((oldState) => oldState + 1);
        }
        nextQuestion();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setLoading(false);
        setCorrect(0);
        setIsModalOpen(false);
        handleSubmit();
    };

    const handleSubmit = () => {
        fetchQuestions(BASE_URL);
    };

    return (
        <AppContext.Provider
            value={{
                loading,
                questions,
                index,
                correct,
                error,
                isModalOpen,
                nextQuestion,
                checkAnswer,
                closeModal,
                handleSubmit,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
