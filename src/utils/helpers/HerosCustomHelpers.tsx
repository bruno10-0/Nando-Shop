import React from "react"

// interface HeroBaseProps {
//     title: string;
//     btnText: string;
// }


export namespace HerosCustomHelpers{

    export interface SimplePropsHelper {
        title: string;
        btnText: string;
        type: string;
    }
    export const simple: React.FC<SimplePropsHelper> = ({title, btnText}) => {
        return(
            <div className="hero-content text-center bg-base-200 " style={{height: "inherit"}}>
                <div className="max-w-md">
                    <h1 className="text-2xl font-bold">{ title }</h1>
                    <button className="btn btn-primary">{ btnText }</button>
                </div>
            </div>
        )
    }

    export interface SimpleDescriptionPropsHelper {
        title: string;
        description: string;
        btnText: string;
        type: string;
    }
    export const simpleDescription: React.FC<SimpleDescriptionPropsHelper> = ({title, btnText, description}) => {
        return(
            <div className="hero-content text-center bg-base-200 border-base-100 sm:border-5" style={{height: "inherit"}}>
                <div className="max-w-md">
                    <h1 className="text-2xl font-bold">{ title }</h1>
                    <p className="py-6">{ description }</p>
                    <button className="btn btn-primary">{ btnText }</button>
                </div>
            </div>
        )
    }
    export interface LoginPropshelper{
        description: string;
        type: string;
    }
    export const login: React.FC<LoginPropshelper> = ({ description }) => {
        return(
            <div className="hero bg-base-200 border-2 border-base-100 sm:border-5 " style={{height: 'inherit'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Inicia Sesion!</h1>
                        <p className="py-6">{ description }</p>
                    </div>
                    <div className="card shrink-0 w-full max-[390px]:w-full sm:w-72 xl:w-96 shadow-2xl bg-base-100">
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered flex w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered flex w-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Olvidaste tu contraseña?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Iniciar Sesion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}