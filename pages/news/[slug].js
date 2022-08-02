import Header from "../../components/base/Header";
import SlideInit from "../../components/homepage/Slide";
import Divider from "../../components/base/Divider";
import Footer from "../../components/base/Footer";
import CategoriesList from "../../components/base/CategoriesList"


import { getPost, getCategories } from '../../utils/wordpress';


export default function Single(props) {
    const { post, categories } = props;

    const { title, content, _embedded, featured_image_src, authorName, date } = post;
    const avatar = _embedded.author[0].avatar_urls['24']
    return (

      <div>
          <Header position="fixed" />
          <SlideInit />

          <div className="my-[100px] container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
             
        
                <div className="md:col-span-2 relative grid gap-4">
                    
                    <h1 className="text-3xl">{title.rendered}</h1>
                    <picture>
                      <img alt="image" className="rounded-xl" src={featured_image_src} />
                    </picture>
                    <div className="grid gap-4" dangerouslySetInnerHTML={{ __html: content.rendered }} />
                 
                    <div className="mt-4">
                      <Divider />
                    </div>
                    
                    <div className=" flex items-center gap-2 justify-between">
                      <div>
                        <picture>
                          <img alt="avatar" src={avatar} className="w-[50px] h-[50px] object-cover rounded-full inline-flex mr-2" />
                        </picture>
                        {authorName}
                      </div>
                      <div className="flex gap-2 items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        
                        {new Date(date).toLocaleDateString("it-IT") }

                      </div>
                    
                    </div>
                 
                </div>
                
 
              <div className="">
               
                <h4 className="text-xl text-center pb-4 border-b-2 border-secundary mb-4">CATEGORIE</h4>
                
                  <CategoriesList categories={categories} />
               
              </div>
          </div>

          <Footer />
      </div>
    )
}


export async function getServerSideProps(context) {
    const { slug } = context.params;
    const post = await getPost(slug);
    const categories = await getCategories();

    return {
        props: { post, categories },
    }
}