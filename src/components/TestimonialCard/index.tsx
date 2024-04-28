type Props = {
    imageSrc: string;
    text: string;
    name: string;
    profession: string;
}

export default function TestimonialCard({ imageSrc, text, name, profession }: Props) {
    return (
        <div className='flex flex-col relative items-center w-[352px] h-[352px] bg-[#FAFAFA] rounded-[8px] pt-[110px] mr-[30px] px-[25px] text-center'>
            <img className='absolute top-[-60px] w-[120px] h-[120px] rounded-full' src={imageSrc} />
            <img className='w-[27px] h-[22px] mb-[35px]' src="/images/quote-symbol.png" alt="Imagem de aspas" />
            <p className='font-mulish text-[14px] text-[#333333] mb-[15px]'>{text}</p>
            <p className='text-[18px] font-[500] mb-[6px] text-[#333333]'>{name}</p>
            <p className='text-[14px] text-[#333333]'>{profession}</p>
        </div>
    )
}
