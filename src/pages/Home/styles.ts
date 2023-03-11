import styled from "styled-components"

export const HomeContainer = styled.main(({}) => ({
    flex: "1",

    display: "flex",    
    flexDirection: "column",
    alignItens: "center",
    justifyContent: "center",

    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3.5rem",
    }
}))

export const BaseCountdownButton = styled.button(({ theme }) => ({
    border: "0",
    padding: "1rem",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: theme["gray-100"],

    "&:disabled": {
        opacity: "0.7",
        cursor: "not-allowed",
    },
}))

export const StartCountdownButton = styled(BaseCountdownButton).attrs({type: "submit"})(({ theme }) => ({
    background: theme["green-500"],

    "&:not(:disabled):hover": {
        background: theme["green-700"]
    }
}))

export const StopCountdownButton = styled(BaseCountdownButton).attrs({type: "button"})(({ theme }) => ({
    background: theme["red-500"],

    "&:not(:disabled):hover": {
        background: theme["red-700"]
    }
}))