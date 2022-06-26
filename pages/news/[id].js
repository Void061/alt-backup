import Head from "next/head";
import Script from "next/script";
import Header from "../../components/base/Header";
import SlideInit from "../../components/homepage/Slide";


import Divider from "../../components/base/Divider";
import Footer from "../../components/base/Footer";

import NestedList from "../../components/NestedList";
import Router, {useRouter} from "next/router";
import { useEffect, useReducer, useState } from "react";
import Skeleton_Article from '../../components/Skeleton_Article'


export default function Single(props){

    
    
    
  

    
    
    //HOOKS Per cambiare i dati - Inizializzati a 0
    const [Titolo, setTitolo] = useState(0);
    const [Copertina, setCopertina] = useState(0);
    const [Content, setContent] = useState(0);
    const [Data_pubblicazione, setDataPub] = useState(0);
    const [Autore, setAutore] = useState(0);
    const [Avatar, setAvatar] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    

    //per aggiornare l'articolo in base alla rotta
    


   useEffect(() => {
        

       if(props.articolo.meta.pagination.total > 0){
        
        setTitolo(props.articolo.data[0].attributes.titolo);
        setContent(props.articolo.data[0].attributes.content);
        setDataPub(props.articolo.data[0].attributes.publishedAt);
        setCopertina('../images/prova2.png');
        setAutore(props.articolo.data[0].attributes.utente.data.attributes.username);
        setAvatar(props.BASE_URL + props.articolo.data[0].attributes.utente.data.attributes.avatar.data.attributes.url);
        
        setLoading(true);
       }
       else{
           //Articolo non trovato
           Router.push('/category/all')
       }

   },[isLoading])
   
   
      
      
     
    
    
    return(
        <div>
           
                 <Header position="fixed" />
                 <SlideInit />

                 <div id="view" className="main-category">

                    
                   
                     <div id="articolo" className="category edit-cat">
                               
                               
                            

                    
                    {!isLoading ? <Skeleton_Article/> :
                     <div className="relative article modificato">

                     <div className="header-single">
                        <h1>{Titolo}</h1>
                        
                    </div>


                    <img className="anteprima" src={Copertina}/>

            

            
                    <div className="content-single">
                    <div dangerouslySetInnerHTML={{__html: "<p>"+Content+"</p>" }} />
                        

                        <div className="testo-decorato">
                            <div className="evidenzia"></div>
                            <div dangerouslySetInnerHTML={{__html: "<p>"+Content+"</p>" }} />
                            
                            
                        </div>

                      
                        
                        
                    </div>
                    

            <div className="footer-single">
                    <Divider />



                        <div className="mt4 mb-3 author">
                            <img src={Avatar} className="w-[50px] h-[50px] object-cover rounded-full inline-flex mr-2"/>
                            {Autore}
                        </div>
                        <div className="ml-3 mb-3 publication-date publication-date flex items-center content-center text-[#0cf]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {Data_pubblicazione}
                        </div>
                        

                        
                        
                    </div>
            
           
        </div>              }      
                     </div>
                    

        
                     <div className="container_index edited">

                        
                        
                        <div className="indice_articoli">
                            <h4 className="text-lg">CATEGORIE</h4>
                            <span className="divider-articoli"></span>
                            <NestedList baseurl={props.BASE_URL} page="news" setAvatar={setAvatar} setAutore={setAvatar} setCopertina={setCopertina} setDataPub={setDataPub} setContent={setContent} setTitolo={setTitolo} articoli={props.articoli_totali.data} categorie={props.categorie.data}/>
                            
                            
                            
                         </div>

                        
                     </div>


                     
                     
                     
                 </div>




               

                 
                 <Footer/>
        </div>
    )
}







  export async function getServerSideProps(context) {
    const {id} = context.query;  
    
    const articolo = await fetch(process.env.STRAPI_API_URL+ "articoli?populate=utente.avatar&filters[id][$eq]="+id).then(r => r.json())
    const articoli_totali = await fetch(process.env.STRAPI_API_URL + "articoli?populate=utente.avatar,categorie").then(r => r.json());
    const categorie = await fetch(process.env.STRAPI_API_URL + "categorie").then(r=> r.json());
    const BASE_URL = process.env.BASE_URL;
    return {
      props: {
            articolo: articolo,
            articoli_totali: articoli_totali,
            categorie: categorie,
            BASE_URL: BASE_URL
      }, 
    }
  }