import React from "react"
import { ContentContainer } from "./styles"

interface logProps {
    name: string
    idNum: string
    dateCreated:string

}

export const Logs: React.FC<logProps> = ({ name, idNum, dateCreated, children }) => {
    return (
        <>
            <ContentContainer>
                <h4>{ name }</h4>
                <h4> ( {idNum } )</h4>
            </ContentContainer>
                <p>Created: { dateCreated }</p>
        </>
    )
}
