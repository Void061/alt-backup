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
            <div className="duration-200 container md:p-5">
                <div className="mx-auto card-icon-cont py-5 xl:py-10 px-0 flex flex-col items-start content-center justify-center ">
                    <div className="pb-[0px] xl:pb-5 relative">
                        <picture>
                          <img className="rounded-[25px]" src={`/images/${props.img}.png`} />
                        </picture>
                        <div className="absolute bottom-[-20px] md:bottom-[-10px] xl:bottom-0 right-[50px]">
                            <Icon name="arrow-right" css="card-icon-white stroke-1 stroke-[#00ccf6] w-10 h-10" />
                        </div>
                    </div>
                    <h5 className="text-[30px] md:text-[25px] mt-10 md:mt-2 pb-2">{props.titolo}</h5>
                    <p>{props.sottotitolo}</p>
                </div>
            </div>
        )
    }
}
