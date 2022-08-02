import Category from './Category';



export default function categories (props) {
  const { categories = [] } = props
  return (
  <div>
    <h2 className="text-2xl border-b-2 border-primary pb-2"> CATEGORIES </h2>
    { categories.filter(c => c.count > 0).map( (category,i) => <Category category={category} key={'category' + i} /> )}
  </div>
  )
}