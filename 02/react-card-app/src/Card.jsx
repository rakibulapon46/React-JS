import profilePic from './assets/apon.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card_img' src={profilePic} alt="profile Picture"/>
            <h2 className='card_title'>Rakibul Apon</h2>
            <p className='card_text'>I make youtube videos and play video game</p>
        </div>
    )
}
export default Card