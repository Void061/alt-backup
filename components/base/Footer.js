import Link from "next/link"
import Divider from "./Divider"

export default function Footer() {
    return (
        <div className="bg-primary pb-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 pt-[100px] md:pt-[100px]">
                <div className="col-span-1 flex flex-row justify-center items-center pb-10 md:pb-0">
                    <div className="">
                        <img src="/images/logo-white.png" width="200px" />
                    </div>
                </div>
                <div className="col-span-1 flex flex-row justify-center  pb-10 md:pb-0">
                    <div className="flex flex-col items-center md:items-start">
                        <h5 className="text-white mb-5">Social Network</h5>
                        <div className="flex flex-row">
                            <Link legacyBehavior href="https://www.facebook.com/altera.consulting">
                                <a className="pr-3 pl-3 md:pl-0 md:pr-5"><img src="/images/facebook.png" /></a>
                            </Link>
                            <Link legacyBehavior href="https://www.instagram.com/altera_consulting/">
                                <a className="pr-3 pl-3 md:pl-0 md:pr-5"><img src="/images/instagram.png" /></a>
                            </Link>
                            <Link legacyBehavior href="https://www.linkedin.com/company/altera-consulting-company/">
                                <a className="pr-3 pl-3 md:pl-0 md:pr-5"><img src="/images/linkedin.png" /></a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row justify-center  pb-10 md:pb-0">
                    <div className="flex flex-col items-center md:items-start">
                        <h5 className="text-white mb-5">Link utili</h5>
                        <div className="flex flex-col">
                            <Link legacyBehavior href="/privacy-policy">
                                <a className="text-white pr-3 pl-3 md:pl-0 md:pr-5">Privacy Policy</a>
                            </Link>
                            <Link legacyBehavior href="/cookie-policy">
                                <a className="text-white pr-3 pl-3 md:pl-0 md:pr-5">Cookie Policy</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row justify-center pb-10 md:pb-0">
                    <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-white mb-5">Info e Contatti</h5>
                        <p className="text-white font-[400]"><b>Email:</b> info@altera.consulting</p>
                    
                    </div>
                </div>
            </div>
            <div className="pt-14 px-[15px]">
                <Divider type="footer" />
            </div>
            <div className="container mx-auto text-center text-white text-[15px]">
                Altera ©2022 - P.IVA: 03195120591 - All rights reserved
            </div>
        </div>
    )
}