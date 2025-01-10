

const First = () => {
  return (
    <div>
        <div className="flex justify-around h-screen px-40 first">
        <div className="w-[400px]  h-[800px] content1">
          <div className="text-3xl font-semibold text-center title">Spring / Summer Vibs</div>
          <div className="text-center my-7 para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            accusamus minima voluptatum recusandae aperiam laborum distinctio
            saepe dignissimos molestiae reprehenderit?
          </div>
          <div className="rounded-lg img">
            <img className="rounded-lg"
              src="../../public/Images/mohamad-khosravi-DuY4JP2M34Q-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" w-[400px]  h-[850px] pt-7 content2">
          <div className="img">
            <img className="rounded-t-[40%]"
              src="../../public/Images/austin-wade-d2s8NQ6WD24-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="py-6 para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            accusamus minima voluptatum recusandae aperiam laborum distinctio
            saepe dignissimos molestiae reprehenderit?
          </div>
          <button className="p-2 border-2 border-green-500 border-solid" >
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default First
