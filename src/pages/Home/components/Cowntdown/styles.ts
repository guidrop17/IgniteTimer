import styled from "styled-components"

export const CountdownContainer = styled.div(({ theme }) => ({
    fontFamily: "Roboto Mono, monospace",
    fontSize: "10rem",
    lineHeight: "8rem",
    color: theme["gray-100"],
    display: "flex",
    gap: "1rem",

    span: {
        background: theme["gray-700"],
        padding: "2rem 1rem",
        borderRadius: "8px",
    }
}))

export const Separator = styled.div(({ theme }) => ({
    padding: "2rem 0rem",
    color: theme["green-500"],
    width: "4rem",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
}))