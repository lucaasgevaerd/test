import TestimonialCard from "../../../../components/TestimonialCard";

export default function Testimonials() {
    return (
        <section className='flex w-full justify-center items-center py-[100px]'>
            <div className='flex flex-col max-w-6xl mx-14'>
                <div className='mb-[150px] text-center'>
                    <h2 className='text-[49px] text-[#5E5873] mb-[5px]'>Depoimentos</h2>
                    <p className='text-[18px] font-[500] text-[#5E5873]'>O suporte ao cliente é nossa primeira prioridade.</p>
                </div>
                <div className='flex'>
                    <TestimonialCard
                        imageSrc={"/src/assets/images/carlos-eduardo-amaral-testimonial.png"}
                        text={"A mpays foi a plataforma onde eu tive a maior taxa de aprovação de crédito do mercado."}
                        name={'Carlos Eduardo Amaral'}
                        profession={'CEO da Amaral Mídia'}
                    />
                    <TestimonialCard
                        imageSrc={"/src/assets/images/renato-laureano-testimonial.png"}
                        text={"O principal diferencial é a taxa de cartão recusado ser muito baixa, aumentando nossa taxa de conversão e o faturamento.”"}
                        name={'Renato Laureano'}
                        profession={'Fundador da Anellimn Store'}
                    />
                    <TestimonialCard
                        imageSrc={"/src/assets/images/armando-girao-testimonial.png"}
                        text={"Depois de muito pesquisar, decidi migrar para a mpays e já nas primeiras semanas nossa taxa de conversão subiu para 94%."}
                        name={'Armando Girão'}
                        profession={'Fundador da Orion E-commerce'}
                    />
                </div>
            </div>
        </section>
    )
}
