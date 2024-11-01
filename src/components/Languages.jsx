

import SkillCard from "./SkillCard";


const skillItem = [
  {
      imgSrc: '/images/korean.png',
      label: 'Korean',
      desc: 'Native'
    },
    {
      imgSrc: '/images/english.svg',
      label: 'English',
      desc: 'Comfortable'
  },
  {
      imgSrc: '/images/japanese.png',
      label: 'Japanese',
      desc: 'Comfortable'
    },
  {
      imgSrc: '/images/italian.svg',
      label: 'Italian',
      desc: 'Basic'
  },

];


const Languages = () => {
    return (
        <section 
        id="languages" 
        className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Languages
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

export default Languages