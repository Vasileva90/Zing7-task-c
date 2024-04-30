import Image from "next/image";
import { truck } from "@/app/assets/images";

const Hero =() => {
    return (
        <section className="flex flex-col justify-center items-center gap-16 mt-[72px] xl:max-w-[60%]">
            <h1 className="font-inter font-semibold text-center max-sm:text-5xl text-7xl leading-[108%] sm:tracking-[-4px] text-swamp-blue">
            Гъвкави решения за сухопътен транспорт за всеки клиент
            </h1>
            <Image
                src={truck}
                alt="truck"
                width={969}
                height={690}
            />
        </section>
    )
}
export default Hero