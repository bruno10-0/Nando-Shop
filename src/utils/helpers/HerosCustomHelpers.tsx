import React from "react"

interface HeroBaseProps {
    title: string;
    btnText: string;
}


export namespace HerosCustomHelpers{

    export interface SimplePropsHelper extends HeroBaseProps{}
    export const simple: React.FC<SimplePropsHelper> = ({title, btnText}) => {
        return(
            <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{ title }</h1>
                    <button className="btn btn-primary">{ btnText }</button>
                </div>
            </div>
        )
    }

    export interface SimpleDescriptionPropsHelper {
        title: string;
        description: string;
        btnText: string;
    }
    export const simpleDescription: React.FC<SimpleDescriptionPropsHelper> = ({title, btnText, description}) => {
        return(
            <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{ title }</h1>
                    <p className="py-6">{ description }</p>
                    <button className="btn btn-primary">{ btnText }</button>
                </div>
            </div>
        )
    }
}