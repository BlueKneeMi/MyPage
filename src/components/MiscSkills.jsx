

import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/photoshop.svg',
        label: 'Adobe Photoshop',
        desc: 'Experienced'
      },
      {
        imgSrc: '/images/illustrator.svg',
        label: 'Adobe Illustrator',
        desc: 'Experienced'
    },
    {
        imgSrc: '/images/procreate.svg',
        label: 'Adobe Procreate',
        desc: 'Experienced'
      },
    {
        imgSrc: '/images/mac.png',
        label: 'Mac OS',
        desc: 'Experienced'
    },
    {
        imgSrc: '/images/windows.svg',
        label: 'MS Windows',
        desc: 'Comfortable'
    },
];

const MiscSkills = () => {
    return (
        <section className="sectionClean" id="skills">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Skills
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

export default MiscSkills