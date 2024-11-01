
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);


import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Made...',
      name: 'Japan tourism brochure character design',
      company: 'https://arxiv.org/abs/2404.03393'
    },
    {
      content: 'Made...',
      name: 'Various illustration work',
      company: 'https://arxiv.org/abs/2303.11806'
    },
    {
      content: 'Made...',
      name: 'global innovation platform',
      company: 'https://www.sciencedirect.com/science/article/pii/S1877750324000772'
    },
    {
      content: 'Made...',
      name: 'kintex illustration work',
      company: 'https://www.sciencedirect.com/science/article/abs/pii/S0378475423005505'
    },
    {
      content: 'Made....',
      name: 'pamphlet design',
      company: 'https://matrika.fmf.uni-lj.si/letnik-6/stevilka-1/andrej_pozun.pdf'
    },
    {
      content: "Made...",
      name: '(cousin) Company logo and banner',
      company: 'https://repozitorij.uni-lj.si/Dokument.php?id=136724&lang=slv'
    }
];


const Publications = () => {

    useGSAP(() => {
      gsap.to('.scrub-slide', {
        scrollTrigger: {
          trigger: '.scrub-slide',
          start: 'top 60%',
          end: '+=400',
          scrub: true
        },
        x: '-1300'
      })
    });
    return (
        <section
        id="publications"
        className="section overflow-hidden"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Some of my Freelance projects
                </h2>

                <div className="scrub-slide-container">
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({content, name, company}, key) => (
                        <ReviewCard
                        key={key}
                        name={name}
                        content={content}
                        projectLink={company}
                        classes="reveal-up"
                        />
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}


export default Publications