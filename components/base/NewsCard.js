import Icon from "./Icon";
import Router from "next/router";

export default function NewsCard(props) {
   
    return (
        <div className="duration-200 p-5">
            <div className="container mx-auto py-10 flex flex-col items-start content-center justify-center ">
                <div className="pb-5 relative w-full">
                    <img onClick={ () => Router.push('/news/'+props.id+"#view")} className="cursor-pointer rounded-[50px] object-cover max-h-[350px] w-full" alt="" src={props.img} />
                </div>
                <div className="publication-date flex items-center content-center text-[#0cf]">
                    <Icon name="calendar" css="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" /> {new Date(props.data).toLocaleDateString("it-IT")}
                </div>
                <h4 className="troncato">
                    {props.titolo}
                </h4>
            
                <div className="mt-2 mb-2 h-13 overflow-hidden troncato" dangerouslySetInnerHTML={{__html: props.sottotitolo}} />
                
               
                <div className="flex">
                    <div className="flex items-center">
                    <img className="w-10 h-10" src={props.baseurl + props.avatar} />
                        <p className="ml-4">by  {props.autore}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
