// components/layout.js

import Header from "../../components/base/Header";

import Footer from "../../components/base/Footer";


export default function Layout({ props, children }) {
  return (
    <>
      <Header  position="fixed" />
      <main className="min-h-screen pt-[100px]">{children}</main>
      <Footer />
    </>
  )
}