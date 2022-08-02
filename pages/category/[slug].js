import Layout from '../../components/base/Layouts'
import PostsGrid from '../../components/category/postsGrid';
import Search from '../../components/category/search';
import Categories from '../../components/category/categories';
import Recent from '../../components/category/recent';
import { getCategories, getPosts, getCategory } from '../../utils/wordpress';

export default function Category(props) {
  const { posts, categories, news } = props;

  return (
    <Layout >
      <div className="container mx-auto md:grid grid-cols-3 gap-6 py-[100px]">
        <div className='md:col-span-2'>
          <PostsGrid posts={posts} />
        </div>
        <div className='md:col-span-1 flex flex-col gap-8'>
          <Search />
          <Categories categories={categories} />
          <Recent news={news} />
        </div>
      </div>
    </Layout>  
  )
}



export async function getServerSideProps(context) {

    
    const { slug } = context.params;
    const currentCategory = await getCategory({ slug });
    
    const [ posts, news ] = await Promise.all([
      await getPosts({ categories: currentCategory.id }),
      await getPosts()
    ])

    const categories = await getCategories();
    return {
      props: { posts, categories, news }
    }
   
}