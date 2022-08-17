import Icon from "./Icon";
import Router from "next/router";


function newsCard(props) {
  return (
    <div>
      <div onClick={() => Router.push('/news/' + props.slug)} className="cursor-pointer mx-auto py-10 grid gap-4">
        {/* Immagine */}
        <div>
          <img
            className="rounded-[15px] object-cover max-h-[350px] w-full"
            src={props.featured_image_src} title="img" />
        </div>
        {/* Fine immagine */}

        {/* Data */}
        <div className="flex items-center publication-date">
          <Icon name="calendar" css="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" /> {
            new Date(props.date).toLocaleDateString("it-IT")
          }
        </div>
        {/* Fine Data */}
        {/* Titolo */}
        <div>
          <h4 dangerouslySetInnerHTML={{ __html: props.title.rendered }} ></h4>
        </div>
        {/* Fine Titolo */}
        {/* excerpt */}
        <div>
          <p className="troncato" dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }} ></p>
        </div>
        {/* Fine excerpt */}
        {/* Autore */}
        <div className="flex items-center">
          <picture>
            <img className="w-10 h-10 rounded-full" src={props._embedded.author[0].avatar_urls['48']} />
          </picture>
          <p className="ml-4">di  <b>{props.authorName}</b></p>
        </div>
        {/* Fine Autore */}
      </div>
    </div>
  )
}


export default newsCard;