import Icon from "../base/Icon";
import { useState, useEffect } from "react";
import { getPosts } from '../../utils/wordpress';
import Router from "next/router";

export default function postGrid (props) {

  const { posts } = props;

  return (
    <div className="grid md:grid-cols-2 gap-6"> { posts.map((post,i) => (
      <div className="grid gap-4" key={'posts' + i}> 
        <picture>
          <img className="cursor-pointer rounded-[20px] object-cover max-h-[350px] w-full" onClick={() => Router.push('/news/' + post.slug )} src={ post.featured_image_src } title="img" />
        </picture>

          <div className="flex items-center publication-date text-primary">
            <Icon name="calendar" css="h-5 w-5 stroke-primary stroke-[2px] mr-[5px]" /> {
              new Date(post.date).toLocaleDateString("it-IT")
            }
          </div>

          <div>
            <p onClick={() => Router.push('/news/' + post.slug )} className="cursor-pointer text-primary troncato  font-extrabold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} ></p>
          </div>

          <div>
            <p className="text-primary troncato font-thin" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} ></p>
          </div>

          <div className="flex items-center">
            <picture>
              <img className="w-10 h-10 rounded-full" src={ post._embedded.author[0].avatar_urls['24'] } />
            </picture>
            <p className="ml-4 text-primary font-semibold">by  {post.authorName}</p>
          </div>

      </div>
      )) 
    }
  
    </div>
  )
}