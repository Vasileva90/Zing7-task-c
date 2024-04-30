const Button = ({label = ""}) => {
    return (
        <button className="px-3.5 py-3 border-2 rounded-lg border-swamp-blue text-left font-inter font-semibold text-base leading-[170%] text-swamp-blue">
            {label}
        </button>
    )
}

export default Button