export default function Hero() {
    return (
        <>
            <img className='fixed right-[50px] bottom-[150px] hover:cursor-pointer hover:scale-[115%] transition duration-[0.2s] z-[2]' src="/images/whatsapp-icon.png" alt="Ícone do Whatsapp" />
            <section className='flex top-bg justify-center'>
                <div className='flex w-full max-w-6xl mx-14 items-center justify-between relative'>
                    <div className="flex flex-col mt-[-50px]">
                        <h1 className='text-[49px] min-w-[415px] text-white leading-[60px] mb-[30px]'>Tecnologia e segurança pra você <span className='font-[700]'>vender mais.</span></h1>
                        <p className="text-[18px] max-w-[360px] font-[500] text-[#ffffff] leading-[32px]">Venda online com a segurança e tecnologia mpays. Soluções simples e flexíveis para digitalizar o seu negócio.</p>
                    </div>
                    <img className='scale-[90%]' src="/images/pixelbook-go.png" alt="Imagem do PixelBook Go" />
                </div>
            </section>
        </>
    )
}
