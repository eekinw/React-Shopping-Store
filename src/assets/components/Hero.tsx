import image from "../image.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <img className="h-screen w-screen object-covermy" src={image} alt="" />
      <h1></h1>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl font-bold tracking-widest">
          Welcome To Our Store!
        </h1>
        <button className="mt-5 bg-green-400 py-2 px-4 rounded-full text-white hover:scale-105 cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
