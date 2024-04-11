function CardTeam({ name, img, desc }) {
    return (
        <div className="group relative max-sm:w-1/2 max-sm:p-4">
            <div className="relative w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 h-40 lg:h-80">
                <img
                src={img}
                alt='foto hadiiyok'
                className="h-full w-full object-cover object-center"
                />
            </div>
            <h3 className="mt-6 max-sm:mt-4 max-sm:text-xs text-sm text-gray-500">
                <a href="" >
                <span className="absolute inset-0" />
                {name}
                </a>
            </h3>
            <p className="max-sm:text-[0.50rem] text-sm font-semibold text-gray-900">
                {desc}
            </p>
        </div>
    )
}

export default CardTeam;

