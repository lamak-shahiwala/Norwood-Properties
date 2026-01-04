import { IoArrowForward } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-brand-orange text-white px-8 py-12 md:px-12 lg:px-14 font-helvetica min-h-screen w-full flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <nav className="space-y-4">
              <div className="text-sm font-light tracking-wide">
                <a href="#properties">PROPERTIES</a>
              </div>
              <div className="text-sm font-light">
                <a href="">STUDIO</a>
              </div>
              <div className="text-sm font-light">
                <a href="">PROCESS</a>
              </div>
              <div className="text-sm font-light">+ADD PROPERTY</div>
            </nav>

            <div className="pt-4">
              <div className="text-sm font-light mb-4">(info)</div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">P:</span> +44 (445) 578 996
                </div>
                <div>
                  <span className="font-medium">E:</span> example@gmail.com
                </div>
                <div>
                  <span className="font-medium">A:</span> 101 Days Rd, Grange
                  QLD 4051
                </div>
              </div>
            </div>

            <div className="text-xs font-light pt-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              {" / "}
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Built for Buyers.
                <br />
                Sent to You.
              </h1>
              <p className="text-sm font-light max-w-md">
                Meant balls it if up doubt small purse. Required his you put the
                outlived answered position.
              </p>
            </div>

            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent border-b border-white pb-3 text-white placeholder-white/80 focus:outline-none focus:border-white/60"
              />
              <button className="absolute right-0 bottom-3 hover:opacity-70 transition-opacity">
                <IoArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
            Norwood Properties
            <sup className="relative -top-9 md:-top-10 lg:-top-16 text-4xl md:text-6xl font-extralight">
              +
            </sup>
          </div>
          <div>
            <div className="hidden md:flex items-center gap-3">
              <span className="h-[1px] w-8 bg-white/20"></span>
              <span className="hidden md:block text-sm">1997</span>
              <span className="h-[1px] w-96 bg-white/20"></span>
            </div>
            <div className="text-right pt-4">
              <div className="text-xs font-light">
                © Copyright {new Date().getFullYear()} Norwood Properties all
                rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
