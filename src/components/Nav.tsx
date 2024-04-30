import Button from "./Button";

const Nav = () => {
    const links: string[] = ["За нас", "Услуги", "Цени", "Как работи", "Контакти"];

    return (
        <header className="flex justify-between items-center mt-8 w-full">
            <span className="font-space-grotesk font-bold text-[29.65px] leading-[140%] tracking-[-0.62px] text-swamp-blue">Website</span>
            <ul className="flex gap-10 text-left font-inter font-medium text-base leading-[170%] max-lg:hidden">
                <li className="font-bold text-swamp-gray">
                    <a href="/">Начало</a>
                </li>
                {links.map((link) => (
                    <li key={link} className="text-swamp-gray">
                        <a>{link}</a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-row items-center gap-9 max-lg:hidden">
                <span className="font-inter font-medium leading-4 text-swamp-green">Профил</span>
                <Button label="Заявка за пратка" />
            </div>
            <div className="lg:hidden border rounded-md border-swamp-green p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </header>
    )
}

export default Nav