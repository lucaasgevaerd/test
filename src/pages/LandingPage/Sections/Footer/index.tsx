import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='flex justify-center footer-bg flex items-end pb-[25px]'>
            <div className='flex flex-col max-w-6xl mx-14'>
                <div className='flex w-full justify-between mb-[80px]'>
                    <div className='flex w-[730px] justify-between'>
                        <div>
                            <p className="text-[18px] font-[500] text-[#5E5873] mb-[24px]">Endereço</p>
                            <p className='text-[12px] text-[#5E5873] w-[118px]'>R. dos Andradas, 1234
                                Centro Histórico
                                Porto Alegre - RS
                                90020-008</p>
                        </div>
                        <div>
                            <p className="text-[18px] font-[500] text-[#5E5873] mb-[24px]">Legal</p>
                            <Link to="/#" className='inline-block text-[12px] text-[#5E5873] mb-[24px]'>Termos de uso</Link>
                            <p className='text-[12px] text-[#5E5873]'>Política de privacidade</p>
                        </div>
                        <div>
                            <p className="text-[18px] font-[500] text-[#5E5873] mb-[24px]">Contato</p>
                            <p className='text-[12px] text-[#5E5873] mb-[24px]'>contato@mpays.com</p>
                            <p className='text-[12px] text-[#5E5873] mb-[24px]'>(51) 98314.3325</p>
                            <div className='flex'>
                                <img className='w-[12px] h-[12px]' src="/src/assets/images/linkedin-icon.png" alt="Ícone do LinkedIn" />
                                <img className='w-[12px] h-[12px]' src="/src/assets/images/facebook-icon.png" alt="Ícone do Facebook" />
                                <img className='w-[12px] h-[12px]' src="/src/assets/images/instagram-icon.png" alt="Ícone do Instagram" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className="text-[18px] font-[500] text-[#5E5873] mb-[24px]">Aceitamos</p>
                            <div className='flex flex-col mb-[24px]'>
                                <div className='flex w-[120px] items-center justify-between'>
                                    <img className='w-[31px] h-[9px]' src="/src/assets/images/visa-brand.png" alt="Bandeira Visa" />
                                    <img className='w-[24px] h-[19px]' src="/src/assets/images/mastercard-brand.png" alt="Bandeira Mastercard" />
                                    <img className='w-[24px] h-[24px]' src="/src/assets/images/american-express-brand.png" alt="Bandeira American Express" />
                                </div>
                                <div className='flex w-[120px] items-center justify-between'>
                                    <img className='w-[29px] h-[12px]' src="/src/assets/images/hipercard-brand.png" alt="Bandeira Hipercard" />
                                    <img className='w-[20px] h-[20px]' src="/src/assets/images/elo-brand.png" alt="Bandeira Elo" />
                                    <img className='w-[27px] h-[16px]' src="/src/assets/images/banescard-brand.png" alt="Bandeira Banescard" />
                                </div>
                                <div className='flex w-[120px] items-center justify-between'>
                                    <img className='w-[24px] h-[18px]' src="/src/assets/images/jcb-brand.png" alt="Bandeira JCB" />
                                    <img className='w-[24px] h-[17px]' src="/src/assets/images/diners-club-brand.png" alt="Bandeira Diners Club" />
                                    <img className='w-[29px] h-[10px]' src="/src/assets/images/pix-brand.png" alt="Bandeira Pix" />
                                </div>
                            </div>
                            <p className='text-[12px] text-[#5E5873]'>*Demais cartões sob contratação.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='mb-[20px]' src="/src/assets/images/pci-dss-compliance-certification.png" alt="Certificação PCI DSS Compliant" />
                            <img src="/src/assets/images/reclame-aqui-highest-rating-seal.png" alt="Selo de reputação máxima do Reclame aqui" />
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between mb-[80px]'>
                    <p className='text-[12px] text-[#5E5873]'>Copyright @ 2022 mpays</p>
                    <img src="/src/assets/images/mpays-logo.png" alt="Mpays Logo" />
                </div>
                <div>
                    <p className='max-w-[980px] text-center text-[12px] text-[#5E5873]'>mpays é um produto da Multti Tecnologia e Integrações, empresa brasileira registrada no CNPJ nº 33.511.889/0001-20. A atividade de subcredenciamento é dispensada de autorização do Banco Central do Brasil, conforme termos da Circular nº 3.885/2018. Demais dispositivos aplicáveis, como o disposto nas Circulares nº 3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
                    </p>
                </div>
            </div>
        </footer>
    )
}
