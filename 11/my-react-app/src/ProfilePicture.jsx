
function ProfilePicture() {
    const imageUrl = "./src/assets/Apon.jpg";
    // const handleClick = () => console.log("OUCH!");
    const handleClick = (e) => e.target.style.display = "none";
  return (
    <>
    <img src={imageUrl} onClick={handleClick} className="apon" />
    </>
  )
}

export default ProfilePicture