//Libs (react-countup)
import CountUp from 'react-countup'
const Services = () => {
    return (
        <section className='container mx-auto my-12'>
            <div className='mx-auto mt-4 sm:grid w-3/4 sm:grid-cols-3 gap-4 bg-accent p-4 flex flex-col'>
                <div className='flex flex-col items-center justify-center bg-white p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={20000} duration={3} prefix='+' /></p>
                    <p className='text-xl font-bol'>Parfume Experts</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-white p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={10000} duration={4.5} prefix='+' /></p>
                    <p className='text-xl font-bol'>Happy Clients</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-white p-2 text-center'>
                    <p className='text-2xl text-brown font-bold'><CountUp end={3} duration={3.7} prefix='+' /></p>
                    <p className='text-xl font-bol'>Billion Euros</p>
                </div>
            </div>
        </section>
    )
}

export default Services
