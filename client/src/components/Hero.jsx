function Hero() {
  return (
    <>
      <div>
        <div className=' relative '>
          <img
            className='object-cover  w-full  '
            src='https://source.unsplash.com/man-in-white-shirt-and-black-shorts-riding-bicycle-on-road-during-daytime-OnG7tWwufiQ'
            alt=''
          />
          <div className='absolute top-20 left-40  max-ch-w '>
            <h2 className=' text-8xl text-white uppercase font-extrabold max-ch-w'>
              Discover Unique Treasures at Veló Auctions
            </h2>
            <p className=' mt-2  text-orange-950  text-4xl  '>
              Explore and bid on a curated selection of exclusive items
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
