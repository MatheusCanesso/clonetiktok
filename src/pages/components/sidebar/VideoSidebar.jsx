import React, { useState } from 'react'
import "./VideoSidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function VideoSidebar({likes, messages, saves, urlPerfil}) {

    // Função de Like

    const [liked, setLiked] = useState(false)

    function handdleLike(){
        setLiked(!liked)
    }

    // Função de Salvar

    const [saved, setSaved] = useState(false)

    function handdleSaved(){
        setSaved(!saved)
    }

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar__profile'>
            <img src={urlPerfil} className='videoSidebarProfile__image' alt="Perfil do usuario" />
            <div className='buttonIcon'>
            <FontAwesomeIcon className='buttonIconPlus' icon={faPlus} size='1x'/>
            </div>
        </div>
        <div 
            className='videoSidebar__options'
            onClick={handdleLike}
        >
            { liked ?  <FavoriteIcon className='buttonIconLikeCheio' fontSize='large' style={{color: "#e32551",}} /> : <FavoriteBorderIcon className='buttonIconLikeVazio' fontSize='large'/>}
            
            <p>{ liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSidebar__options'>
            <FontAwesomeIcon icon={faComment} size='2x'/>
            <p>{messages}</p>
        </div>
        <div 
            className='videoSidebar__options'
            onClick={handdleSaved}
        >
            { saved ?  <BookmarkOutlinedIcon className='buttonIconSaveCheio' fontSize='large' style={{color: "#f0c505",}}/> : <BookmarkBorderOutlinedIcon className='buttonIconSaveVazio' fontSize='large' />}

            <p>{ saved ? saves + 1 : saves}</p>
        </div>
    </div>
  )
}

export default VideoSidebar