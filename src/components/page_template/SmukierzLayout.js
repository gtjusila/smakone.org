import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function SmukierzLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "Kehidupan SMUKIERS",
            link:"/smukierz"
        },
        {
            id:2,
            title: "Tips Belajar",
            link:"/smukierz/tips",
        },
        {
            id:3,
            title: "Kegiatan Setelah Kelas",
            link:"/smukierz/setelahKelas"
        },
        {
            id:4,
            title: "Dengar Dari SMUKIERS",
            link:"/smukierz/interview"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-16 lg:mt-24 px-7 lg:px-3 xl:px-0">
                <div className="container grid grid-cols-12 gap-6">
                    <div className="hidden lg:block lg:col-span-3 border-r-2">
                        <Sidebar data= {sideMenuItem}/>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        {content}
                    </div>
                </div>  
            </div>
        </MainContainer>
        
    )
}