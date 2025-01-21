'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import roadmapItems from './data'

const RoadMap = () => {
    return (
        <section className='w-full py-10'>
            <div className='w-[95%] lg:w-[80%] mx-auto'>
                <Carousel opts={{
                    align: "start"
                }} className="w-full">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className='text-white text-2xl lg:text-4xl font-medium'>The Blenix Roadmap: <br /> Building the Future of Blockchain</h1>
                        <div className="flex items-center gap-x-3">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                    <CarouselContent className="-ml-4">
                        {roadmapItems.map((item, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2" >
                                <div className="bg-dark-gray rounded-[15px] p-5 h-full">
                                    <h1 className="text-gray-400 font-semibold inline-block">{item.phase}</h1>
                                    <div className="flex items-center gap-x-3">
                                        <h3 className="lg:text-2xl text-lg text-white font-semibold my-3">{item.title}</h3>
                                    </div>
                                    {item.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="flex items-start gap-x-2 mt-2">
                                            <div className="p-1 rounded-full bg-custom-orange mt-2" />
                                            <p className="text-white m-0 text-sm font-light">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default RoadMap

