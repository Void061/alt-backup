
import Header from "../components/base/Header";
import SlideInit from "../components/homepage/Slide";
import Card from "../components/base/Card";
import Contatti from "../components/homepage/Contatti";
import TitleAndSubtitle from "../components/base/TitleAndSubtitle";
import NewsCard from "../components/base/NewsCard";
import Divider from "../components/base/Divider";
import Footer from "../components/base/Footer";
import StrapiClient from "../lib/strapi-client";
import Head from "next/head";

export default function Home(props) {
   return (
        <div>
            <Head>
            <title>Altera</title>
            <meta name="description" content="Società di servizi e consulenza" />
            </Head>
            <Header Home={true} position="fixed" />
            <SlideInit />
            <div id="about" className="container pt-[140px]">
                <TitleAndSubtitle titolo_normal="Hub per lo sviluppo " titolo_light="e <br /> condivisione di valori" sottotitolo="Altera è un Hub per lo sviluppo e condivisione di valori, sentimenti, obiettivi e azioni orientate al miglioramento della nostra comunità del Golfo di Gaeta." />
                <Divider />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <div>
                        <Card type="simple" icon="plus" iconClass="w-[60px] h-[60px] fill-secundary hover:fill-primary duration-200" titolo="Consulenza strategica" sottotitolo="Costruiamo e sviluppiamo business valutando la fattibilità degli investimenti" />
                    </div>
                    <div>
                        <Card type="simple" icon="doc" iconClass="w-[60px] h-[60px] fill-secundary hover:fill-primary duration-200" titolo="Finanza agevolata" sottotitolo="Ricerchiamo agevolazioni per la nascita e lo sviluppo delle imprese" img="prova2" />
                    </div>
                    <div>
                        <Card type="simple" icon="lux" iconClass="w-[60px] h-[60px] fill-secundary hover:fill-primary duration-200" titolo="Marketing e comunicazione" sottotitolo="Sviluppiamo la Brand Identity e miglioriamo il posizionamento sul mercato" img="prova3" />
                    </div>
                    <div >
                        <Card type="simple" icon="aereo" iconClass="w-[60px] h-[60px] fill-secundary hover:fill-primary duration-200" titolo="Technology Development" sottotitolo="Progettiamo siti web, software gestionali, e soluzioni innovative Web 3.0" img="prova4" />
                    </div>
                </div>
            </div>
            <div className="bg-slide-img bg-cover relative text-white">
                <div className="absolute bg-[#1E4589] h-[100px] w-full top-0 opacity-40">
                </div>
                <div className="container pt-[200px] pb-[100px]">
                    <div class="grid grid-cols-3">
                        <div className="col-span-1">
                            <h2 className="text-white">Il nostro Team lorem ipsum sit docet sunto es</h2>
                        </div>
                        <div className="col-span-2 grid grid-cols-2">
                            <div className="col-span-1">
                                Offriamo una consulenza trasversale per l'avvio, lo sviluppo e la diversificazione d'impresa. Supportiamo imprenditori e aspiranti tali nel loro percorso verso
                            </div>
                            <div className="col-span-1">
                                Offriamo una consulenza trasversale per l'avvio, lo sviluppo e la diversificazione d'impresa. Supportiamo imprenditori e aspiranti tali nel loro percorso verso
                            </div>
                            <div className="col-span-2">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="container mt-5 mx-auto py-[100px]">
                <TitleAndSubtitle titolo_normal="Professional " titolo_light="Experience" sottotitolo="Offriamo una consulenza trasversale per l&apos;avvio, lo sviluppo e la diversificazione d&apos;impresa. Supportiamo imprenditori e aspiranti tali nel loro percorso verso l&apos;autorealizzazione." />
                <Divider />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <div>
                        <Card type="services" titolo="Consulenza strategica" sottotitolo="Costruiamo e sviluppiamo business valutando la fattibilità degli investimenti" img="prova" />
                    </div>
                    <div className="xl:mt-12">
                        <Card type="services" titolo="Finanza agevolata" sottotitolo="Ricerchiamo agevolazioni per la nascita e lo sviluppo delle imprese" img="prova2" />
                    </div>
                    <div>
                        <Card type="services" titolo="Marketing e comunicazione" sottotitolo="Sviluppiamo la Brand Identity e miglioriamo il posizionamento sul mercato" img="prova3" />
                    </div>
                    <div className="xl:mt-12">
                        <Card type="services" titolo="Technology Development" sottotitolo="Progettiamo siti web, software gestionali, e soluzioni innovative Web 3.0" img="prova4" />
                    </div>
                </div>
            </div>
            <Contatti />
            <div className="py-[100px]">
                <TitleAndSubtitle titolo_normal="News & " titolo_light="Update" sottotitolo="Contributi e finanziamenti, consigli di marketing e tutto ciò che devi sapere per migliorare la tua impresa. <br /> Selezioniamo news e contenuti che contano davvero per aiutarti a sfruttare le ultime opportunità!" />
                <div className="pb-10">
                    <Divider />
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {

                        props.news.data?.map((article, index) => (

                            <>

                                {article.attributes.utente.data == null || article.attributes.utente.data == undefined ?
                                    null
                                    : <NewsCard id={article.id} baseurl={props.BASE_URL} key={index} titolo={article.attributes.titolo} sottotitolo={article.attributes.content} img={"/images/prova3.png"} data={article.attributes.updatedAt} autore={article.attributes.utente.data.attributes.username} avatar={article.attributes.utente.data.attributes.avatar.data.attributes.url} />
                                }

                            </>
                        ))
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}





export const getStaticProps = async () => {
    const allNews = await fetch(process.env.STRAPI_API_URL + "articoli?populate=utente.avatar&sort[0]=publishedAt:desc&pagination[pageSize]=6").then(r => r.json())
    const BASE_URL = process.env.BASE_URL;
    return {
        props: {
            news: allNews,
            BASE_URL: BASE_URL
        }
    }
}