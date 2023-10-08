import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import GalleryDesktop from './GalleryDesktop'
import GalleryMobile from './GalleryMobile'
import useGallery from './useGallery'
export default function Gallery({picture}) {
    const {isMobileView} = useGallery()
    return (
        isMobileView ? <GalleryMobile picture={picture}/> : <GalleryDesktop picture={picture} />
    )
}
