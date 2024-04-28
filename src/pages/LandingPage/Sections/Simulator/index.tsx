import Select from 'react-select';
import { Tooltip } from 'react-tooltip'

export default function Simulator() {

    type OptionType = {
        label: string;
        value: string;
    };

    const options: OptionType[] = [
        { value: 'cashCredit', label: 'Crédito à vista' },
        { value: 'Debt', label: 'Débito' },
        { value: 'Installments', label: 'Parcelado' },
    ];

    return (
        <section className='flex justify-center sales-simulator-bg bg-[#E9ECEF]'>
            <div className='flex w-full max-w-6xl mx-14 items-center justify-center h-[600px]'>
                <div className='w-full max-w-[380px] mr-[50px]'>
                    <h2 className='text-[49px] text-[#5E5873] mb-[20px] leading-[60px]'>Simulador de vendas mpays</h2>
                    <p className='text-[18px] text-[#5E5873] font-[500] leading-[32px]'>Veja quanto você recebe nas vendas no crédito, débito e parcelado.</p>
                </div>
                <div className='flex w-[664px] h-[310px] bg-[#F8F8F8] rounded-[16px] drop-shadow-[3px_3px_8px_rgba(0,0,0,0.2)] p-[30px]'>
                    <div className='flex flex-col w-[350px] mr-[30px]'>
                        <div className='flex flex-col mb-[30px]'>
                            <label htmlFor="valueInput" className='text-[12px] mb-[5px] text-[#6F6F6F]'>Valor</label>
                            <input className='py-[8px] px-[12px] rounded-[5px] border placeholder-[#B9B9C3]' type="text" id="valueInput" name="value" placeholder="R$ 1.000,00" />
                        </div>

                        <label htmlFor="formOfPayment" className='text-[12px] mb-[5px] text-[#6F6F6F]'>Forma de pagamento</label>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            isClearable
                            isSearchable
                            name="formOfPayment"
                            options={options}
                            placeholder="Crédito à vista"
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    padding: '2px 12px',
                                    borderRadius: 5,
                                    borderColor: state.isFocused ? '#000' : '#e5e7eb',
                                    boxShadow: state.isFocused ? '0 0 0 1px #000' : '',
                                    "&:hover": {
                                        borderColor: state.isFocused ? '#000' : '#e5e7eb',
                                    },
                                    height: 'fit-content',
                                    minHeight: '35px',
                                    transition: 'none',
                                }),
                                valueContainer: (provided) => ({
                                    ...provided,
                                    padding: '0px 0px',
                                }),
                                placeholder: (provided) => ({
                                    ...provided,
                                    color: '#B9B9C3',
                                }),
                                indicatorSeparator: () => ({}),
                                dropdownIndicator: (provided, state) => ({
                                    ...provided,
                                    color: state.isFocused ? '#000' : '#e5e7eb',
                                    transition: 'none',
                                    ":hover": {
                                        color: state.isFocused ? '#000' : '#e5e7eb',
                                    },
                                }),
                            }}
                        />
                    </div>
                    <div>
                        <p className='mb-[30px] text-[#5E5873] text-[18px] font-[500]'>VOCÊ RECEBE:</p>
                        <div className='flex mb-[30px]'>
                            <div className='mr-[30px] text-[12px]'>
                                <p className='mb-[30px] text-[12px]'>NA HORA</p>
                                <p className='mb-[30px] text-[12px]'>EM 10 DIAS</p>
                                <p>EM 30 DIAS</p>
                            </div>
                            <div>
                                <p className='mb-[30px] text-[12px]'>Não disponível</p>
                                <p className='mb-[30px] text-[12px]'>R$ 949,70</p>
                                <p className='text-[12px]'>R$ 959,70</p>
                            </div>
                        </div>
                        <p className='text-[12px]'>
                            Todas as simulações usam as taxas iniciais informadas no site.
                            <span
                                data-tooltip-id="rates-info"
                                data-tooltip-variant="light"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #7367F0',
                                    borderRadius: '50%',
                                    padding: '6px',
                                    width: '6px',
                                    height: '6px',
                                    textAlign: 'center',
                                    color: '#7367F0',
                                    marginLeft: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                ?
                            </span>
                            <Tooltip id="rates-info" place="top-start">
                                <span style={{ fontSize: '16px' }}>Informação adicional sobre as taxas</span>
                            </Tooltip>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
