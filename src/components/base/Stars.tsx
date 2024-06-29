import React, { useEffect, useState } from "react";
import { createStars, Star } from "@/lib/utils";

interface StarsProps {
    color: string;
}

const Stars: React.FC<StarsProps> = ({ color }) => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const starCount = 225;
        setStars(createStars(starCount, color));
    }, [color]);

    return (
        <>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star fixed rounded-full"
                    style={{
                        width: `calc(${star.size} * 2.5)`,
                        height: `calc(${star.size} * 2.5)`,
                        backgroundColor: star.color,
                        boxShadow: `0 0 ${star.blur} ${star.color}`,
                        top: `calc(50% + ${star.position.split(" ")[1]})`,
                        left: `calc(50% + ${star.position.split(" ")[0]})`,
                        animation: `flicker ${Math.random() * 2 + 1.5}s infinite alternate, zoom ${Math.random() * 20 + 10}s infinite alternate, move ${Math.random() * 5 + 5}s infinite`,
                        animationDelay: `${Math.random()}s`,
                        zIndex: -1,
                    }}
                ></div>
            ))}
        </>
    );
};

export default Stars;