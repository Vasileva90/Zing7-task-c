import { dangerous, fridge, oversize } from "@/app/assets/images";
import Image, { StaticImageData } from "next/image";

const CaseStudies = () => {
    const images: { iamgeSrc: StaticImageData, imageAlt: string, label: string }[] = [
        {
            iamgeSrc: dangerous,
            imageAlt: "dangerous cargo",
            label: "Опасни товари (ADR)"
        },
        {
            iamgeSrc: fridge,
            imageAlt: "fridge transport",
            label: "Хладилен транспорт"
        },
        {
            iamgeSrc: oversize,
            imageAlt: "oversize cargo",
            label: "Извънгабаритни товари"
        }
    ]

    return (
        <div className="flex flex-col gap-y-16">
            <h1 className="font-space-grotesk font-semibold text-5xl leading-[115%] tracking-[-2px] text-left text-swamp-blue">
                Други услуги
            </h1>
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-6">
                {images.map((image) => (
                    <div key={image.imageAlt} className="flex flex-col gap-y-2 md:gap-y-8">
                        <Image
                            src={image.iamgeSrc}
                            alt={image.imageAlt}
                            width={416}
                            height={300}
                            className="border rounded-2xl"
                        />
                        <h1 className="font-space-grotesk font-semibold text-2xl leading-[140%] tracking-[-0.5px] text-left text-swamp-blue">
                            {image.label}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CaseStudies