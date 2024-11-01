

const aboutItems = [
    {
        label: 'Projects done',
        number: 5
    },
    {
        label: 'Years of experience',
        number: 3
    }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl
                md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8
                    md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Miryang and this is my page, which should give you an idea of who I am.
                        As you can see I most enjoy illustration and creative design. For a more complete portofolio you can check....(site).
                        I am also an avid traveller having been to over 4 continents and 30 countries. You can check some of my experiences at my blog...
                        ˁ˚ᴥ˚ˀ
                    </p>

                    <div className="flex flex-wrap items-center gap-4
                    md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold
                                        md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold
                                        md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img 
                        src="/images/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About