import Icon from "../base/Icon";
import Router from "next/router";

export default function recent (props) {
  const { news = [] } = props
  return (
  <div>
    <h2 className="text-2xl border-b-2 border-primary pb-2"> Recent <span className=' font-[200]'> Updates </span> </h2>
    <div className="grid gap-4 mt-4">
      { news.map( (post,i) => (
        <div key={'recent' + i} className="flex gap-4">
   
            <img
              className="cursor-pointer rounded-[20px] object-cover w-[100px] h-[100px]" 
              onClick={() => Router.push('/news/' + post.slug )} src={ post.featured_image_src } title="img" />
     
          <div className="grid gap-2">
            <div className="flex items-center publication-date">
              <Icon name="calendar" css="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" /> {
                new Date(post.date).toLocaleDateString("it-IT")
              }
            </div>
            <div>
              <p className="troncato" dangerouslySetInnerHTML={{ __html: post.title.rendered }} ></p>
            </div>
            <div className="flex items-center justify-between">
              <p className=" text-primary font-semibold">by  {post.authorName}</p>
              <p className="flex gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                123
              </p>
            </div>
          </div>
        </div>
      ) )}
    </div>
  </div>
  )
}