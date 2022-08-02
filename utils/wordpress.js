const  BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const removeEmpty = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};

export async function getPosts(opts = {} ) {
  const { categories = undefined } = opts;

  const query = new URLSearchParams( removeEmpty({ categories, _embed: true }) )

  try {
    const posts = await fetch(`${BASE_URL}/posts?${query}`).then( p => p.json() );
    return [...posts, ...posts];
    
  } catch (error) {
    console.error( error )
    return []
  }
}

export async function getCategories() {

  const posts = await fetch(`${BASE_URL}/categories?_embed`).then( p => p.json() );

  return [...posts, ...posts];
}

export async function getPost(slug) {
  const query = new URLSearchParams({
    slug,
    _embed: true
  })
  const posts = await fetch(`${BASE_URL}/posts?${query}`).then( p => p.json() );

  return posts.length > 0 ? posts[0] : {};
}

export async function getCategory(opts) {
  const { slug = undefined, _embed = true } = opts;

  const query = new URLSearchParams( removeEmpty( { slug, _embed } ) )

  const category = await fetch(`${BASE_URL}/categories?${query}`).then( p => p.json() );

  return category.length > 0 ? category[0] : {};
}


