

import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
    icon: "star",
    style: {fontVariationSettings: '"FILL" 1'}
});

const ReviewCard = ({
    content,
    name,
    projectLink}) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex items-center gap-2 mt-auto">
                <div>
                    <p>{name}</p>
                </div>
            </div>

            <p className="text-zinc-400 mb-8">
                {content}
            </p>
            <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span 
                    className="material-symbols-rounded"
                    aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
                <a
            href={projectLink}
            target="_blank"
            className="absolute inset-0"
            >
            </a>
        </div>
    )
}





ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired
}

export default ReviewCard