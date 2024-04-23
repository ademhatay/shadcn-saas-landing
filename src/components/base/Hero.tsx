import { Button } from  "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const Hero = () => {
    return <>
        <div className="pt-32 container px-5 md:px-7 ">
            <div className="flex flex-col w-full justify-center items-center">
                <div className="btn-card text-center text-base">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    We just raised $20M in Series B.
                </div>


                <h1 className="sm:text-5xl md:text-5xl lg:text-6xl text-4xl text-center font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#7474BF] to-[#348AC7] pb-6 w-full">
                    The best way to manage <br />  your Personal Tasks
                </h1>
                <p className="text-base text-center md:text-lg lg:text-xl xl:text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="button-group my-5 flex flex-col gap-y-4 md:gap-y-0 md:flex-row w-full justify-center items-center">
                    <Button variant="default" className="w-full md:w-auto md:mr-4">
                        Download the app
                    </Button>
                    <Button variant="outline" className="w-full md:w-auto md:mr-4">
                        Sign Up
                    </Button>
                </div>
                <p className="text-xs md:text-sm text-center">* No credit card required</p>


                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 6000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                        align: "center"
                    }} className="mb-10 mt-5 max-w-[1074px]">
                    <CarouselContent className="m-0">
                        <CarouselItem className="p-0 flex justify-center">
                            {/* <img src="https://via.placeholder.com/1074x608" alt="" /> */}
                            <img className="rounded-md w-[1074px]" src="/hero.png" alt="" />
                        </CarouselItem>
                        <CarouselItem className="p-0 flex justify-center">
                            <img className="rounded-md" src="https://via.placeholder.com/1074x608" alt="" />
                        </CarouselItem>
                        <CarouselItem className="p-0 flex justify-center">
                            <img className="rounded-md" src="https://via.placeholder.com/1074x608" alt="" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    </>
}

export default Hero
