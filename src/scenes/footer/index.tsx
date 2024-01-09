import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-10">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            faljlf;aglag;lalg lkjaklg ladsjlfalgj agalkgjlajf lakjg
            alksdglajlfal akldjlfjal hdkfjklaj lkakg;ajdflka dfakhdflakjd f
          </p>
          <p>All Rights Reserves.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-10">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">djla;f fad;</p>
          <p className="my-5">alf;kjl oiahfdj</p>
          <p>fjlajflaf;</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-10">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">djla;f fad;</p>
          <p className="my-5">alf;kjl oiahfdj</p>
          <p>76869585986</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
