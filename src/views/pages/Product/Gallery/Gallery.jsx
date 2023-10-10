'use client'

import { urlForImage } from '../../../../../sanity/lib/image'

import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import GalleryDesktop from './GalleryDesktop'
import GalleryMobile from './GalleryMobile'
import useGallery from './useGallery'

export default function Gallery({images}) {
    const {isMobileView} = useGallery()
    const imagesUrl = images.map((img)=>urlForImage(img))
    return (
        isMobileView ? <GalleryMobile images={imagesUrl}/> : <GalleryDesktop images={imagesUrl} />
    )
}
