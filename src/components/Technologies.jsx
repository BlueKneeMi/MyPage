

import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/git.svg',
      label: 'Git',
      desc: 'Comfortable'
    },
    {
      imgSrc: '/images/unix.svg',
      label: 'Unix',
      desc: 'Comfortable'
    },
    {
      imgSrc: '/images/sql.svg',
      label: 'SQL',
      desc: 'Comfortable'
    },
    {
        imgSrc: '/images/matplotlib.svg',
        label: 'Matplotlib',
        desc: 'Comfortable'
    },
    {
        imgSrc: '/images/pandas.svg',
        label: 'Pandas',
        desc: 'Comfortable'
    },
    {
        imgSrc: '/images/sklearn.svg',
        label: 'scikit-learn',
        desc: 'Comfortable'
    },
    {
        imgSrc: '/images/numpy.svg',
        label: 'Numpy',
        desc: 'Comfortable'
    },
    {
      imgSrc: '/images/html5.svg',
      label: 'HTML',
      desc: 'Familiar'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'Familiar'
    },
    {
      imgSrc: '/images/docker.svg',
      label: 'Docker',
      desc: 'Familiar'
    },
];

const Technologies = () => {
    return (
        <section className="sectionClean">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Technologies employed
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc}, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Technologies