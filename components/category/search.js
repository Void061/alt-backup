export default function search (props) {
  return (
  <div className="relative">
    <input className=" focus:outline-none border-2 border-primary rounded-xl w-full p-3" type="search" placeholder="Enter your keywords" />
    <button className="hover:bg-secundary transition-colors absolute right-3 top-3 p-3 text-white bg-primary rounded-xl">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </button>
  </div>)
}