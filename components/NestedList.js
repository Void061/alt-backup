import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRight from '@mui/icons-material/ChevronRight';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function NestedList (props){

  
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [openx, setOpenX] = React.useState([false, false]);




    
    let categorie = props.categorie;
    
    let articoli = props.articoli;

  

    


  
    
    

    const router = useRouter();

  

  
     

     const OpenCatX = (id) => {
       
      let temp = [];
      temp = openx;

      temp[id] = !temp[id];
       
      
       setOpenX(openx => [...temp]);


     }
      
     
       
        
        
    return(

        <List
        sx={{ marginTop: '30px' , width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            
          </ListSubheader>
        }
      >
     

     {
      
      categorie.map((categoria, i) => {
        
        //let art = articoli.find(elemento =>  elemento.attributes.categorie.data[i].id === categoria.id)
        //elemento.id === categoria.attributes.id

        

        
        //let articles = [];
     
        //articles.push(art);
       

     
        
       
        
        
        
        return(
          <>
            <ListItemButton sx={{ display: 'flex', flexDirection: 'row-reverse'}} onClick={() => OpenCatX(i)}>
            <ListItemText sx={{marginLeft: '5px'}} secondary={categoria.attributes.titolo} />
            {openx[i] ? <ExpandMore /> : <ChevronRight />}
          </ListItemButton>


            {articoli != undefined && articoli != null ? 
            
            
            <Collapse in={openx[i]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>


                {
                
                    articoli.map((articolo, indice) => {

                     

                      return(
                        articolo.attributes.categorie.data.map((id_cat, index) => {
                          
                          
                            if(id_cat.id === categoria.id){
                              
                        

                              return(
                                
                                
                                <ListItemButton onClick={ props.page == 'news' ? () => UpdateArticle(props.baseurl, router, articolo, props.setTitolo, props.setContent, props.setDataPub, props.setCopertina, props.setAutore, props.setAvatar) : () => router.push('/news/'+articolo.id+"#view")} key={i} sx={{ pl: 4 }}>
                                <ListItemText primary={articolo.attributes.titolo} />
                              </ListItemButton>
                              
                              )
                            }
                        })
                      )
                    })
                  /*
                  articoli.attributes.categorie.data.map((art_cat_id, index) => {
                     
                     
                      if(art_cat_id.id === categoria.id){
                        return(
                          <ListItemButton onClick={ props.page == 'news' ? () => UpdateArticle(router, art, props.setTitolo, props.setContent, props.setDataPub, props.setCopertina, props.setAutore, props.setAvatar) : () => router.push('/news/'+art.id+"#articolo")} key={i} sx={{ pl: 4 }}>
                            <ListItemText primary={art.attributes.titolo} />
                          </ListItemButton>
                        )
                      }
                  })
                  */
                }
                
                  <ListItemButton onClick={props.page == 'news' ? () => router.push('/category/'+categoria.id+"#view") : () => UpdateCategory(categoria.id, props.setArticoli, router)} key={i+1} sx={{ pl: 4 }}>
                    
                    <ListItemText primary={"MORE"} />
                    
                  </ListItemButton>
                  
              
              </List>
            </Collapse>
            
            
            : null}
          </>
        )
        

           
      })

     }
        
       


       


        
      </List>

    )
}


function UpdateArticle(baseurl, router, art, setTitolo, setContent, setData, setCopertina, setAutore, setAvatar){
  setTitolo(art.attributes.titolo);
  setContent(art.attributes.content);
  setData(art.attributes.publishedAt);
  setCopertina('../images/prova2.png');
  setAutore(art.attributes.utente.data.attributes.username);


  setAvatar(baseurl + art.attributes.utente.data.attributes.avatar.data.attributes.url);
  router.push('/news/'+art.id+"#view");
}



async function UpdateCategory(id_cat, setArticoli, router){
  
  const Articoli = await fetch("https://admin.altera.consulting/api/articoli?populate=utente.avatar&filters[categorie][id][$eq]="+id_cat).then(r => r.json())
  console.log(Articoli);
  setArticoli(Articoli.data);
  router.push("/category/"+id_cat+"#view");
  
}