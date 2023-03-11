import styled from "styled-components";


export const FormContainer = styled.div(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    color: theme["gray-100"],
    fontSize: "1.125rem",
    fontWeight: "bold",
    flexWrap: "wrap",
}))

const BaseInput = styled.input(({ theme }) => ({
    background: "transparent",
    height: "2.5rem",
    border: "0",
    borderBottom: `2px solid ${theme["gray-500"]}`,
    fontWeight: "bold",
    fontSize: "inherit",
    padding: "0 0.5rem",
    color: theme["gray-100"],

    "&:focus": {
        boxShadow: "none",
        borderColor: theme["green-500"],
    },

    "&::placeholder": {
        color: theme["gray-500"],
    }
}))


export const TaskInput = styled(BaseInput)(() => ({
    flex: "1",

    "&::-webkit-calendar-picker-indicator": {
        display: "none !important",
    },

    ":disabled" : {
        cursor: "not-allowed",
    }
}))

export const MinutesAmountInput = styled(BaseInput).attrs({type: "number"})(() => ({
    width: "4rem",
    
    ":disabled" : {
        cursor: "not-allowed",
    }
}))