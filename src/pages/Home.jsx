import Logo from "../assets/images/jawir.png";
import FastMarquee from "react-fast-marquee";

export default function Home() {
    return (
        <>
            <section>
            <div className="container mx-auto grid grid-cols-2 gap-8 justify-center items-center h-screen">
                <div className="flex flex-col justify-center">
                    <h2 className="text-8xl mb-10">JAWIR ACADEMY</h2>
                    <p className="text-2xl w-[800px] mb-10">Jawir Academy adalah komunitas belajar IT yang mendalam, menyediakan pembelajaran pemrograman website, aplikasi mobile, dan desain UI/UX. Kami membangun ruang inklusif bagi individu dari berbagai latar belakang untuk terhubung, belajar, dan berkolaborasi. Dengan instruktur berpengalaman dan sumber daya tambahan seperti forum diskusi dan proyek kolaboratif, kami mempersiapkan generasi ahli TI yang kompeten dan inovatif untuk masa depan digital yang dinamis.</p>
                    <div>
                        <a className='btn btn-outline'  href="https://discord.gg/jawir" target="_blank">Bergabung Dengan Kami 🚀</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img className="w-[500px] h-[500px]" src={Logo} alt="Jawir Academy Logo" />
                </div>
            </div>
            </section>
            <FastMarquee speed={100}>
                <div className="flex items-center gap-2 bg-gray-200">
                    <img className="w-[4.5rem]" src={Logo} alt="Jawir Academy Logo" />
                    <h1 className="text-6xl tracking-wider font-extrabold">
                        JAWIR ACADEMY
                    </h1>
                    <img className="w-[4.5rem]" src={Logo} alt="Jawir Academy Logo" />
                    <h1 className="text-6xl tracking-wider font-extrabold">
                        JAWIR ACADEMY
                    </h1>
                    <img className="w-[4.5rem]" src={Logo} alt="Jawir Academy Logo" />
                    <h1 className="text-6xl tracking-wider font-extrabold">
                        JAWIR ACADEMY
                    </h1>
                </div>
            </FastMarquee>
        </>
    )
}