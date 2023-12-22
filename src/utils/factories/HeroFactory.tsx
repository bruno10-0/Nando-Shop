import React from "react";
import { HerosCustomHelpers } from "../helpers/HerosCustomHelpers";

interface HeroFactoryInterface{
    createHero(type: string, props: HerosCustomHelpers.SimplePropsHelper): React.ReactNode | null;
    createHero(type: 'simple-description', props: HerosCustomHelpers.SimpleDescriptionPropsHelper): React.ReactNode | null;
}

const HeroFactory: HeroFactoryInterface = {
    createHero(type, props){
        switch (type) {
            case 'simple':
                return <HerosCustomHelpers.simple {...props} />;
                break;
            case 'simple-description':
                return <HerosCustomHelpers.simpleDescription {...props as HerosCustomHelpers.SimpleDescriptionPropsHelper} />;
            default:
                return null
                break;
        }
    }
}

export default HeroFactory