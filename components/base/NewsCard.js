import Icon from "./Icon";
import Router from "next/router";


function newsCard(props){
  return (
    <div className="p-5">
      <div className="container mx-auto py-10 grid gap-4">
        {/* Immagine */}
        <div>
          <img
            className="cursor-pointer rounded-[50px] object-cover max-h-[350px] w-full" 
            onClick={() => Router.push('/news/' + props.slug )} src={ props.featured_image_src } title="img" />
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
          <p className="troncato" dangerouslySetInnerHTML={{ __html: props.title.rendered }} ></p>
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
              <img className="w-10 h-10" src={ props._embedded.author[0].avatar_urls['24'] } />
            </picture>
            <p className="ml-4">by  {props.authorName}</p>
          </div>
        {/* Fine Autore */}
      </div>
    </div>
  )
}


export default newsCard;