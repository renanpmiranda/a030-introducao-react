import React from "react";
import { InfosUsuario } from "./InfosUsuario";

export function CardVideo(props) {
    function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
    }
    return(
        <>
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.imagem} alt=""></img>
            <h4>{props.titulo}</h4> 
            <InfosUsuario username={"Username"} perfil={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>           
        </div>        
        </>        
    )
}