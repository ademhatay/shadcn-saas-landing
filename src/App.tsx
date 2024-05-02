import { useEffect, useState } from "react";
import Header from "./components/base/Header"
import { useTheme } from "./context/themeContext"
import Hero from "./components/base/Hero";
import Brands from "./components/base/Brands";
import Features from "./components/base/Features";
import Pricing from "./components/base/Pricing";


const App = () => {
  const theme = useTheme();
  const [starColor, setStarColor] = useState(theme.theme === "dark" ? "#fff" : "#348AC7");

  useEffect(() => {
    setStarColor(theme.theme === "dark" ? "#fff" : "#348AC7");
  }, [theme.theme]);

  const stars = `-42vw -4vh 0px 0px ${starColor}, 25vw -41vh 0px 0px ${starColor}, -20vw 49vh 0px 1px ${starColor}, 5vw 40vh 2px 2px ${starColor}, 29vw 19vh 1px 0px ${starColor}, -44vw -13vh 0px 0px ${starColor}, 46vw 41vh 0px 1px ${starColor}, -3vw -45vh 0px 1px ${starColor}, 47vw 35vh 1px 0px ${starColor}, 12vw -8vh 1px 0px ${starColor}, -34vw 48vh 2px 2px ${starColor}, 32vw 26vh 2px 2px ${starColor}, 32vw -41vh 2px 2px ${starColor}, 0vw 37vh 2px 2px ${starColor}, 34vw -26vh 1px 0px ${starColor}, -14vw -49vh 1px 0px ${starColor}, -12vw 45vh 0px 1px ${starColor}, -44vw -33vh 0px 1px ${starColor}, -13vw 41vh 0px 0px ${starColor}, -36vw -11vh 0px 1px ${starColor}, -23vw -24vh 1px 0px ${starColor}, -38vw -27vh 0px 1px ${starColor}, 16vw -19vh 0px 0px ${starColor}, 28vw 33vh 1px 0px ${starColor}, -49vw -4vh 0px 0px ${starColor}, 16vw 32vh 0px 1px ${starColor}, 36vw -18vh 1px 0px ${starColor}, -25vw -30vh 1px 0px ${starColor}, -23vw 24vh 0px 1px ${starColor}, -2vw -35vh 2px 2px ${starColor}, -25vw 9vh 0px 0px ${starColor}, -15vw -34vh 0px 0px ${starColor}, -8vw -19vh 1px 0px ${starColor}, -20vw -20vh 2px 2px ${starColor}, 42vw 50vh 0px 1px ${starColor}, -32vw 10vh 1px 0px ${starColor}, -23vw -17vh 0px 0px ${starColor}, 44vw 15vh 1px 0px ${starColor}, -40vw 33vh 2px 2px ${starColor}, -43vw 8vh 0px 0px ${starColor}, -48vw -15vh 2px 2px ${starColor}, -24vw 17vh 0px 0px ${starColor}, -31vw 50vh 1px 0px ${starColor}, 36vw -38vh 0px 1px ${starColor}, -7vw 48vh 0px 0px ${starColor}, 15vw -32vh 0px 0px ${starColor}, 29vw -41vh 0px 0px ${starColor}, 2vw 37vh 1px 0px ${starColor}, 7vw -40vh 2px 2px ${starColor}, 15vw 18vh 0px 0px ${starColor}, 25vw -13vh 2px 2px ${starColor}, -46vw -12vh 2px 2px ${starColor}, -18vw 22vh 0px 0px ${starColor}, 23vw -9vh 1px 0px ${starColor}, 50vw 12vh 0px 1px ${starColor}, 45vw 2vh 0px 0px ${starColor}, 14vw -48vh 1px 0px ${starColor}, 23vw 43vh 0px 1px ${starColor}, -40vw 16vh 2px 2px ${starColor}, 20vw -31vh 0px 1px ${starColor}, -17vw 44vh 2px 2px ${starColor}, 18vw -45vh 0px 0px ${starColor}, 33vw -6vh 0px 0px ${starColor}, 0vw 7vh 0px 1px ${starColor}, -10vw -18vh 0px 1px ${starColor}, -19vw 5vh 1px 0px ${starColor}, 1vw 42vh 0px 0px ${starColor}, 22vw 48vh 0px 1px ${starColor}, 39vw -8vh 2px 2px ${starColor}, -6vw -42vh 1px 0px ${starColor}, -47vw 34vh 0px 0px ${starColor}, -46vw 19vh 0px 1px ${starColor}, -12vw -32vh 0px 0px ${starColor}, -45vw -38vh 0px 1px ${starColor}, -28vw 18vh 1px 0px ${starColor}, -38vw -46vh 2px 2px ${starColor}, 49vw -6vh 2px 2px ${starColor}, -28vw 18vh 2px 2px ${starColor}, 10vw -24vh 0px 1px ${starColor}, -5vw -11vh 2px 2px ${starColor}, 33vw -8vh 1px 0px ${starColor}, -16vw 17vh 0px 0px ${starColor}, 18vw 27vh 0px 1px ${starColor}, -8vw -10vh 2px 2px ${starColor}, 24vw 9vh 1px 0px ${starColor}, 12vw -24vh 0px 1px ${starColor}, -45vw -22vh 0px 0px ${starColor}, -37vw -40vh 0px 1px ${starColor}, 29vw 19vh 0px 1px ${starColor}, 4vw -8vh 0px 1px ${starColor}, -5vw 21vh 2px 2px ${starColor}, -27vw 26vh 2px 2px ${starColor}, -47vw -3vh 2px 2px ${starColor}, -28vw -30vh 0px 1px ${starColor}, -43vw -27vh 0px 1px ${starColor}, 4vw 22vh 2px 2px ${starColor}, 36vw 23vh 0px 0px ${starColor}, -21vw 24vh 2px 2px ${starColor}, -16vw 2vh 1px 0px ${starColor}, -16vw -6vh 0px 0px ${starColor}, 5vw 26vh 0px 0px ${starColor}, -34vw 41vh 0px 0px ${starColor}, 1vw 42vh 2px 2px ${starColor}, 11vw -13vh 2px 2px ${starColor}, 48vw -8vh 1px 0px ${starColor}, 22vw -15vh 0px 0px ${starColor}, 45vw 49vh 0px 0px ${starColor}, 43vw -27vh 2px 2px ${starColor}, 20vw -2vh 0px 0px ${starColor}, 8vw 22vh 0px 1px ${starColor}, 39vw 48vh 2px 2px ${starColor}, -21vw -11vh 0px 1px ${starColor}, -40vw 45vh 0px 1px ${starColor}, 11vw -30vh 1px 0px ${starColor}, 26vw 30vh 1px 0px ${starColor}, 45vw -29vh 0px 1px ${starColor}, -2vw 18vh 0px 0px ${starColor}, -29vw -45vh 1px 0px ${starColor}, -7vw -27vh 2px 2px ${starColor}, 42vw 24vh 0px 0px ${starColor}, 45vw -48vh 1px 0px ${starColor}, -36vw -18vh 0px 0px ${starColor}, -44vw 13vh 0px 1px ${starColor}, 36vw 16vh 0px 1px ${starColor}, 40vw 24vh 0px 0px ${starColor}, 18vw 11vh 0px 0px ${starColor}, -15vw -23vh 1px 0px ${starColor}, -24vw 48vh 0px 1px ${starColor}, 27vw -45vh 1px 0px ${starColor}, -2vw -24vh 0px 1px ${starColor}, -15vw -28vh 0px 0px ${starColor}, -43vw 13vh 1px 0px ${starColor}, 7vw 27vh 1px 0px ${starColor}, 47vw 5vh 0px 0px ${starColor}, -45vw 15vh 2px 2px ${starColor}, -5vw -28vh 0px 1px ${starColor}, 38vw 25vh 2px 2px ${starColor}, -39vw -1vh 1px 0px ${starColor}, 5vw 0vh 1px 0px ${starColor}, 49vw 13vh 0px 0px ${starColor}, 48vw 10vh 0px 1px ${starColor}, 19vw -28vh 0px 0px ${starColor}, 4vw 7vh 0px 0px ${starColor}, 21vw 21vh 2px 2px ${starColor}, -15vw -15vh 0px 1px ${starColor}, -6vw -42vh 1px 0px ${starColor}, -15vw 48vh 2px 2px ${starColor}, -23vw 25vh 2px 2px ${starColor}, -48vw 25vh 0px 1px ${starColor}, -31vw -19vh 0px 1px ${starColor}, 4vw 37vh 2px 2px ${starColor}, -43vw 28vh 0px 0px ${starColor}, 3vw -25vh 0px 1px ${starColor}, -39vw 14vh 0px 1px ${starColor}, -40vw 31vh 0px 1px ${starColor}, 35vw -36vh 2px 2px ${starColor}, 16vw 49vh 0px 0px ${starColor}, 6vw 39vh 0px 0px ${starColor}, 3vw -35vh 0px 1px ${starColor}, -44vw -2vh 1px 0px ${starColor}, -6vw 21vh 1px 0px ${starColor}, 48vw 9vh 2px 2px ${starColor}, -43vw 30vh 2px 2px ${starColor}, 29vw -12vh 2px 2px ${starColor}, -48vw 13vh 1px 0px ${starColor}, -42vw 32vh 2px 2px ${starColor}, 34vw 15vh 2px 2px ${starColor}, 29vw -37vh 2px 2px ${starColor}, 28vw 2vh 0px 0px ${starColor}`;

  return <>

    <div className="stars star1" style={{
      boxShadow: stars,
    }}></div>
    <div className="stars star2"
      style={{
        boxShadow: stars,
      }}
    ></div>
    <Header />
    <Hero />
    <Brands />
    <Features />
    <Pricing />
  </>
}

export default App
