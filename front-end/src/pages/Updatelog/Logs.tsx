import React from "react"
import { ContentContainer } from "./style"

interface logProps {
    name: string
    idNum: string
    dateUpdated:string

}

export const Logs: React.FC<logProps> = ({ name, idNum, dateUpdated, children }) => {
    return (
        <>
            <ContentContainer>
                <h4>{ name }</h4>
                <h4> ( {idNum } )</h4>
            </ContentContainer>
                <p>Updated: { dateUpdated }</p>
        </>
    )
}