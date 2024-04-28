import { Link } from "react-router-dom";

type Props = {
    title: string;
    text: string;
    linkText: string;
    imageSrc: string;
}

export default function CarouselCard({ title, text, linkText, imageSrc }: Props) {
    return (
        <div className='relative flex w-[918px] h-[475px] rounded-[16px] bg-[#F8F8F8] mt-[40px] drop-shadow-[3px_3px_8px_rgba(0,0,0,0.2)] mb-[15px]'>
            <div className='w-[50%] py-[80px] pl-[60px]'>
                <p className='text-[28px] font-[500] text-[#5E5873] mb-[30px] leading-[34px]'>{title}</p>
                <p className='text-[18px] font-[500] text-[#5E5873] mb-[30px] leading-[32px]'>{text}</p>
                <Link to="#" className="text-[18px] font-[500] text-[#7367F0] underline">{linkText}</Link>
            </div>
            <img className='absolute bottom-0 right-0 select-none' src={imageSrc} alt="Imagem do carrossel" />
        </div>
    )
}
