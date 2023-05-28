import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="mt-[50px] text-xl z-50 absolute left-1/2 -translate-x-1/2 top-0 flex justify-between w-[calc(100vw-7%)]  text-body">
        <Link href="">phayuphat118@gmail.com</Link>
        <div className="flex gap-5">
          <Link href={"/"}>About us</Link>
          <Link href="www.google.com">
            Benefits
          </Link>
          <Link href="">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-[40px] absolute z-40 w-full left-1/2 -translate-x-1/2 text-4xl text-center text-white">
        Biko.
      </div>
    </>
  );
}

export default Navbar