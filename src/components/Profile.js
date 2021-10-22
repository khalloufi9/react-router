import React from 'react'
import './Profile.css'
const Profile = ({ location, history }) => {

    const user = location.state
    return (
        <section>
           
            <h1 style={{color:"red"}}>Extra Innings en Streaming VF HD Gratuit</h1>
            <h2>Extra Innings : Informations générales</h2>
            <div class="flex">
            <div>
                <img src={user.src}/>
            </div >
            <div class="block">
            <h3> <span >Titre :</span> {user.name}</h3>
            <h3> <span >Genre :</span> {user.genre}</h3>
            <h3> <span >Année de production : </span> {user.date}</h3>
            <h3> <span >Durée : </span> {user.duree}</h3>
           </div> 
               </div>
            <p>Regarder le film After – Chapitre 3 produit en 2021 aux U.S.A réalisé par Castille Landon interprété par Carter Jenkins, Chance Perdomo, Hero Fiennes-Tiffin, Josephine Langford, Kiana Madeira, Louise Lombard, Stephen Moyer sur wiflix, le meilleur site de streaming gratuit compatible sur tous les appareils ordinateurs, smart TV et mobiles. Vous pouvez regarder des films similaires dans les catégories suivantes: Film, Exclue, Drame, Romance en qualité HD sur multi lecteurs en version française.</p>
               <div>
            <iframe width="640" height="360" src={user.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <button onClick={()=>history.goBack()}>Go Back</button>

        </section>
    )
}

export default Profile;
