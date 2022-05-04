
import React from "react";
import { useGlobalContext } from "../../contexts/context";
import { makeStyles } from '@mui/styles';
import { CloseBtn } from './style';

const useStyles = makeStyles({
    modalContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "all 0.3s linear;",
        zIndex: -1,
    },
    isOpen: {
        opacity: 1,
        zIndex: 999,
    },
    modaContent: {
        background: "#fff",
        width: "90vw",
        maxWidth: "620px",
        padding: "3rem",
        borderRadius: "0.25rem",
        textAlign: "center",
        position: "relative",
    },
});

const Modal = () => {
    const classes = useStyles();
    const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
    return (
        <div
            className={`${isModalOpen ? classes.modalContainer + " " + classes.isOpen : classes.modalContainer
                }`}
        >
            <div className={classes.modaContent}>
                <h2>congrats!</h2>
                <p>
                    You answered {((correct / questions.length) * 100).toFixed(0)}% of
                    questions correctly
                </p>
                <CloseBtn onClick={closeModal}>
                    Play again
                </CloseBtn>
            </div>
        </div>
    );
};

export default Modal;
