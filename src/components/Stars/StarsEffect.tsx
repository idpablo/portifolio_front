import React, { ReactNode } from "react";
import BlackHole from "../Blackhole/Blackhole";
import { WarpContainer, Star } from "../../theme/ThemeStars";

export interface WarpProps {
    rightContent?: ReactNode;
}

const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 20; 
        stars.push(<Star key={i} left={left} top={top} delay={delay} />);
    }
    return stars;
    };

const WarpEffect = ({ starCount = 100 }: { starCount?: number }) => {
    return (
        <WarpContainer>
            {generateStars(starCount)}
        </WarpContainer>
    );
};

export default WarpEffect;