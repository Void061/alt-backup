import Router from "next/router";

export default function category (props) {
  const { category = {} } = props
  
  return (
  <div  onClick={() => Router.push('/category/' + category.slug )} className="cursor-pointer hover:text-primary flex items-center gap-4 py-3" >
    <p className="text-sm block">
      { category.name }
    </p>
    <div className="flex-1 h-[3px] bg-gray-200"></div>
    <span>{ category.count }</span>
  </div>)
}