import 'swiper/css'
import 'swiper/css/navigation'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from '../../../../components/CarouselCard';

register();

export default function Carousel() {
    return (
        <section className='flex justify-center mt-[-40px] mb-[130px]'>
            <div className='w-full max-w-6xl mx-14'>
                <Swiper
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <CarouselCard
                            imageSrc='/images/image-of-carousel-1.png'
                            title='Pagamentos com máxima aprovação'
                            text='Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível.'
                            linkText='Cadastre-se'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselCard
                            imageSrc='/images/image-of-carousel-2.png'
                            title='Checkout de alta conversão'
                            text='Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.'
                            linkText='Saiba mais'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselCard
                            imageSrc='/images/image-of-carousel-3.png'
                            title='Controle total do seu fluxo financeiro'
                            text='Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!'
                            linkText='Clique e conheça'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselCard
                            imageSrc='/images/image-of-carousel-4.png'
                            title='Receba as vendas parceladas em até 2 dias úteis'
                            text='Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu!'
                            linkText='Aproveite'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
