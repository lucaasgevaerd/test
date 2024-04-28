import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className='h-[100px] flex w-full items-center justify-center font-montserrat pt-[40px] absolute top-0 z-10'>
            <div className="flex justify-between w-full max-w-6xl mx-14">

                <img src="/images/mpays-logo-white.png" alt="Logotipo Mpays" className='h-[38px]' />
                <div className='w-full max-w-[591px]'>
                    <nav>
                        <ul className='flex justify-between items-center text-white text-[14px]'>
                            <li><Link to="#">Soluções</Link></li>
                            <li><Link to="#">Tarifas</Link></li>
                            <li><Link to="#">Depoimentos</Link></li>
                            <li><Link to="#">Cadastro</Link></li>
                            <li><Link to="#">Contato</Link></li>
                            <button type='button' className='border rounded-[5px] px-[30px] py-[3px]'>Entrar</button>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
