export function InfosUsuario(props){
    return(
        <div className="user">
            <img className="user-img" src={props.perfil} alt=""></img>
            <span>{props.username}</span>
        </div>
    )

}