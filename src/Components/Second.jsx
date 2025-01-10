
 
const Second = () => {
  return (
    <>
      <div className="h-[39rem] flex justify-around second">
        <div className="h-[600px] w-[400px] flex flex-col justify-around items-start  content">
            <div className="text-3xl font-semibold title">An Industrial Take On Streetwear</div>
            <div className="text-[18px] para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sunt quibusdam eius nemo cum quos eveniet animi? Provident inventore aperiam tempore, distinctio cupiditate eum ea?</div>
            <button className="p-2 border-2 border-green-500 border-solid">Shop Now</button>
        </div>
        <div className="img">
            <img  className="h-[560px]" src="../../public/images/austin-wade-iQn82USu8gs-unsplash.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Second
