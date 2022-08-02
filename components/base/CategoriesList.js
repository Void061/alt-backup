import Router from "next/router";

export default function Card(props) {
  const { categories = [] } = props;

  return (<ul className="grid gap-4">
    { categories.map((category,i) => (
      <li key={'category'+i} onClick={() => Router.push('/category/' + category.slug) } className="cursor-pointer border-l-4 border-transparent hover:border-secundary transition-colors duration-300 p-4 px-6 ">
        {category.name}
    </li>))}
  </ul>)
}