//contains state and helper functions related to the Details component (mainly for the read more functionality)

import React from 'react'
import useDetails from './useDetails'

export default function Details() {
  const {isOpen , setIsOpen , showReadMoreBtn, setShowReadMoreBtn , paragraphRef} = useDetails()
  
  const paragraphStyles = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display : '-webkit-box'
  }

  return (
    <>
        <h2 className='text-xl font-light'>Details</h2>
        
        <div  >
            <p ref={paragraphRef} style={isOpen ? null : paragraphStyles} className='mt-4  font-light text-slate-500'>
                Une manière inédite et magique d’interagir avec votre iPhone. Une fonctionnalité de sécurité essentielle conçue pour sauver des vies. Un appareil photo 48 Mpx innovant pour un niveau de détail à couper le souffle. Et toute la puissance de la puce de smartphone ultime.

                Découvrez Dynamic Island, une innovation signée Apple, conjuguant matériel et logiciel d’une manière totalement inédite. Elle vous présente la musique que vous écoutez, votre appel FaceTime en cours, et tellement plus, sans jamais interrompre ce que vous faites.
                COULEUR:

                Violet Intense (Deep Purple).

                ÉCRAN

                ·         Taille de l'écran 6.7 pouces

                ·         Technologie d'affichage XDR OLED

                STOCKAGE

                ·         Mémoire 128Go

                PERFORMANCE

                ·         Processeur A16 Bionic

                        RAM 6 Gb

                AUDIO

                ·         Nombre de haut-parleurs 2

                BATTERIE

                ·         Technologie de la batterie Li-Ion

                SYSTÈME D'EXPLOITATION (OS)

                ·         Système d'exploitation iOS

                APPAREIL PHOTO

                ·         Caméra 48 Mpx, 12 Mpx, 12 Mpx

                ·         Zoom Optique 6 X

                POIDS ET DIMENSIONS

                ·         Poids 240 grammes

                ·         Epaisseur 7.85 mm

                ·         Largeur 77.6 mm

                ·         Hauteur 160.7 mm

                DIVERS

                ·         Famille Apple iPhone

                ·         Couleur Violet Intense

                ·         Date de sortie 16/09/2022
            </p>
            {
            showReadMoreBtn &&
            <button className='mt-2 hover:text-orange-500' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'Read Less' : 'Read more'} </button>

            }
        </div>    
    </>
    )
}
