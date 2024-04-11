import Logo from "../assets/images/jawir.png";
import CardTeam from '../components/CardTeam';
import teams from "../utils/data";

export default function Home() {
    return (
        <>
            <div className="container mx-auto flex gap-8 justify-center items-center h-screen border-b-2 border-b-gray-300">
                <div className="flex flex-col justify-center">
                    <h2 className="text-8xl mb-10 font-bold">JAWIR ACADEMY</h2>
                    <p className="text-2xl w-[800px] mb-10">Jawir Academy adalah komunitas belajar IT yang mendalam, menyediakan pembelajaran pemrograman website, aplikasi mobile, dan desain UI/UX. Kami membangun ruang inklusif bagi individu dari berbagai latar belakang untuk terhubung, belajar, dan berkolaborasi. Dengan instruktur berpengalaman dan sumber daya tambahan seperti forum diskusi dan proyek kolaboratif, kami mempersiapkan generasi ahli TI yang kompeten dan inovatif untuk masa depan digital yang dinamis.</p>
                    <div>
                        <a className='btn btn-outline'  href="https://discord.gg/jawir" target="_blank">Bergabung Dengan Kami 🚀</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img className="w-[500px] h-[500px]" src={Logo} alt="Jawir Academy Logo" />
                </div>
            </div>
            <div className="container mx-auto border-b-2 border-b-gray-300">
                <div className="py-16 px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Our Teams</h2>
                    <div className="flex flex-wrap justify-around lg:gap-[2rem] items-center">              
                        {teams.map((team, index) => {
                        return <CardTeam key={index} name={team.name} img={team.img} desc={team.desc}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}