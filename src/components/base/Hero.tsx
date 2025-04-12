import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
    return (
        <>
            <div className="pt-40 md:pt-48 container px-5 md:px-7" id="home">
                <div className="flex flex-col w-full justify-center items-center">
                    <Badge variant="outline" className="mb-6 px-4 py-2 text-center gap-2 bg-gray-100/70 backdrop-blur-sm dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1"></span>
                        Yeni: B Serisi yatırımında 20 milyon dolar topladık
                        <ChevronRight className="h-4 w-4" />
                    </Badge>

                    <h1 className="sm:text-5xl md:text-5xl lg:text-6xl text-4xl text-center font-bold pb-6 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7474BF] to-[#348AC7]">Kişisel Görevlerinizi</span> <br /> 
                        <span className="dark:text-white">Yönetmenin En İyi Yolu</span>
                    </h1>
                    
                    <p className="text-base text-center md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                        Görevlerinizi organize edin, projelerinizi takip edin ve zaman yönetiminizi 
                        <span className="bg-gradient-to-r from-[#7474BF] to-[#348AC7] bg-clip-text text-transparent font-semibold"> verimli hale getirin</span>.
                    </p>
                    
                    <div className="button-group mt-2 mb-8 flex flex-col gap-y-4 md:gap-y-0 md:flex-row w-full justify-center items-center">
                        <Link to="/register" className="w-full md:w-auto md:mr-4">
                            <Button variant="default" className="w-full md:w-auto px-6 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-[#7474BF] to-[#348AC7] border-0 group">
                                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-[-2px]" />
                                Uygulamayı İndir
                            </Button>
                        </Link>
                        <Link to="/register" className="w-full md:w-auto">
                            <Button variant="outline" className="w-full md:w-auto px-6 py-6 text-base md:text-lg rounded-xl border-gray-300 dark:border-gray-700 hover:border-[#7474BF] hover:bg-[#7474BF]/5 dark:hover:border-[#348AC7] dark:hover:bg-[#348AC7]/5 transition-all group">
                                Ücretsiz Başla
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    
                    <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-10">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Kredi kartı gerekmez
                    </p>

                    <div className="relative w-full max-w-5xl">
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 6000,
                                }),
                            ]}
                            opts={{
                                loop: true,
                                align: "center",
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="m-0">
                                <CarouselItem className="p-0 flex justify-center">
                                    <img 
                                        className="rounded-2xl w-full max-w-[1074px] shadow-xl hover:shadow-2xl transition-all border border-gray-200/30 dark:border-gray-800/30" 
                                        src="/hero.png" 
                                        alt="Uygulama görseli 1" 
                                    />
                                </CarouselItem>
                                <CarouselItem className="p-0 flex justify-center">
                                    <img 
                                        className="rounded-2xl w-full max-w-[1074px] shadow-xl hover:shadow-2xl transition-all border border-gray-200/30 dark:border-gray-800/30" 
                                        src="https://via.placeholder.com/1074x608" 
                                        alt="Uygulama görseli 2" 
                                    />
                                </CarouselItem>
                                <CarouselItem className="p-0 flex justify-center">
                                    <img 
                                        className="rounded-2xl w-full max-w-[1074px] shadow-xl hover:shadow-2xl transition-all border border-gray-200/30 dark:border-gray-800/30" 
                                        src="https://via.placeholder.com/1074x608" 
                                        alt="Uygulama görseli 3" 
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                                <CarouselPrevious className="static translate-y-0 hover:bg-gray-200/80 dark:hover:bg-gray-800/80" />
                                <CarouselNext className="static translate-y-0 hover:bg-gray-200/80 dark:hover:bg-gray-800/80" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;