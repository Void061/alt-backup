import Icon from "./Icon";

export default function Card(props) {
    if (props.type == "simple") {
        return (
            <div className="duration-200 p-5 icon-and-text hover:text-white">
                <div className="container mx-auto py-10 flex flex-col items-center content-center justify-center text-center">
                    <div className="pb-5"><Icon name={props.icon} css={props.iconClass} /></div>
                    <h3 className="uppercase pb-2">{props.titolo}</h3>
                    <p>{props.sottotitolo}</p>
                </div>
            </div>
        )
    }
    else if (props.type == "services") {
        return (
            <div className="duration-200">
                <div className="mx-auto card-icon-cont group  py-5 xl:py-10 px-0 flex flex-col items-start content-center justify-center ">
                    <div className="pb-[0px] xl:pb-5 relative">
                        <picture>
                          <img className="rounded-[25px]" src={`/images/${props.img}.jpg`} />
                        </picture>
                        <div className="absolute bottom-[-20px] md:bottom-[-10px] left-3 top-3">
                            <Icon name="arrow-right" css="rotate-90 transition-all group-hover:rotate-0 stroke-2 stroke-[#00ccf6] group-hover:stroke-[#fff] w-8 h-8" />
                        </div>
                    </div>
                    <h5 className="text-[30px] md:text-[25px] mt-10 md:mt-2 pb-2">{props.titolo}</h5>
                    <p>{props.sottotitolo}</p>
                </div>
            </div>
        )
    }
}
