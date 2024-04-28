export default function Registration() {
    return (
        <section className='flex w-full justify-center mt-[20px] mb-[120px]'>
            <div className='flex w-full max-w-6xl mx-14 justify-between'>
                <div>
                    <h2 className='text-[49px] text-[#5E5873]'>Crie sua conta</h2>
                    <p className='text-[18px] font-[500] text-[#5E5873]'>Preencha o formulário ao lado para cadastrar-se no mpays.</p>
                </div>
                <div className='w-full max-w-[443px]'>
                    <div className='flex flex-col w-full mb-[30px]'>
                        <label htmlFor="nameInput" className='text-[12px] mb-[5px] text-[#6F6F6F]'>Nome e sobrenome *</label>
                        <input className='w-full py-[8px] px-[12px] rounded-[5px] border border-[#D8D6DE] placeholder-[#B9B9C3]' type="text" id="nameInput" name="name" placeholder="Nome" />
                    </div>
                    <div className='flex flex-col w-full mb-[30px]'>
                        <label htmlFor="emailInput" className='text-[12px] mb-[5px] text-[#6F6F6F]'>Email *</label>
                        <input className='w-full py-[8px] px-[12px] rounded-[5px] border border-[#D8D6DE] placeholder-[#B9B9C3]' type="email" id="emailInput" name="email" placeholder="E-mail" />
                    </div>
                    <div className='flex flex-col w-full mb-[30px]'>
                        <label htmlFor="phoneInput" className='text-[12px] mb-[5px] text-[#6F6F6F]'>Telefone *</label>
                        <input className='w-full py-[8px] px-[12px] rounded-[5px] border border-[#D8D6DE] placeholder-[#B9B9C3]' type="text" id="phoneInput" name="phone" placeholder="Telefone" />
                    </div>
                    <div className='flex flex-col w-full mb-[30px]'>
                        <label htmlFor="passwordInput" className='text-[12px] mb-[5px] text-[#6F6F6F]'>Senha *</label>
                        <input className='w-full py-[8px] px-[12px] rounded-[5px] border border-[#D8D6DE] placeholder-[#B9B9C3]' type="password" id="passwordInput" name="password" placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉" />
                    </div>
                    <button className='bg-[#7D45DC] text-white text-[14px] font-[500] px-[40px] py-[9px] rounded-[5px]' type='submit'>Cadastrar</button>
                </div>
            </div>
        </section>
    )
}
