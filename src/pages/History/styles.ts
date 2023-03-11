import styled from "styled-components";

export const HistoryContainer = styled.main(({ theme }) => ({
    flex: "1",
    padding: "3.5rem",
    display: "flex",
    flexDirection: "column",

    h1: {
        fontSize: "1.5rem",
        color: theme["gray-100"],
    },
}))

export const HistoryList = styled.div(({ theme }) => ({
    flex: "1",
    overflow: "auto",
    marginTop: "2rem",

    table: {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "600px",

        th: {
            background: theme["gray-600"],
            padding: "1rem",
            textAlign: "left",
            color: theme["gray-100"],
            fontSize: "0.875rem",
            lineHeight: "1.6",
            

            "&:first-child": {
                borderTopLeftRadius: "8px",
                paddingLeft: "1.5rem",
            },

            "&:last-child": {
                borderTopRightRadius: "8px",
                paddingRight: "1.5rem",
            }
        },

        td: {
            background: theme["gray-700"],
            borderTop: `4px solid ${theme["gray-800"]}`,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",

            "&:first-child": {
                width: "50%",
                paddingLeft: "1.5rem",
            },

            "&:last-child": {
                paddingRight: "1.5rem",
            }
        }
    }
}))

const STATUS_COLORS = {
    yellow: "yellow-500",
    green: "green-500",
    red: "red-500"
} as const

interface StatusProps {
    color: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>(({ theme, color }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    "&::before": {
        content: "''",
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "9999px",
        background: theme[STATUS_COLORS[color]],
    }
}))