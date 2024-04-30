const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-12 lg:max-w-[50%] pt-24 pb-32">
            <div className="flex flex-col items-center gap-y-6 max-sm:px-4">
                <h1 className="font-space-grotesk font-semibold max-sm:text-5xl text-7xl leading-[108%] sm:tracking-[-4px] text-center text-white">
                    Готови ли сте да работим заедно?
                </h1>
                <p className="font-inter font-normal text-xl leading-[170%] text-center text-white md:max-w-[80%] max-sm:px-2">
                    Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
                </p>
            </div>

            <div className="flex sm:flex-row flex-col justify-center items-center gap-y-7">
                <div className="flex flex-row items-center">
                    <span className="px-2 py-6 bg-white rounded-l-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-swamp-light-grey z-10 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <input className="font-inter font-normal text-base leading-6 tracking-[-0.3px] text-left focus:outline-none placeholder:text-swamp-light-grey max-sm:rounded-r-lg pr-5 py-6"
                        type="tel" placeholder="Мобилен телефон"/>
                </div>
                <button className="font-inter font-semibold leading-6 tracking-[-0.3px] sm:rounded-r-lg max-sm:rounded-lg bg-swamp-yellow text-swamp-green px-9 py-6 w-full h-full">
                    Изпрати
                </button>
            </div>
        </div>
    )
}

export default Contact