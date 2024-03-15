import { useForm } from 'react-hook-form';
import { SelectedPage } from "../../shared/types";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png';

type Props = {
    setSelectPage: (value: SelectedPage) => void;
};

const ContactUs = ({setSelectPage}: Props) => {
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async ( e:any )=> {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }
    return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div 
                onViewportEnter={() => setSelectPage( SelectedPage.ContactUs )}>
                <motion.div
                    className='md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{ 
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt odio,
                        maiores impedit porro nulla libero qui similique ratione fuga perferendis
                        culpa dolor rem esse delectus sed, velit blanditiis reprehenderit iure.
                    </p>
                </motion.div>
                <div className='mt-10 justify-betweengap-8 md:flex'>
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{ 
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            action='https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e'
                            method='POST'
                        >
                            <input 
                                className={ inputStyles }
                                type='text'
                                placeholder='Name'
                                {...register('name', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === 'required' && 'This field is required.'}
                                    {errors.name.type === 'maxLength' && 'Max Length is 100 char.'}
                                </p>
                            )}
                            <input 
                                className={inputStyles}
                                type='text'
                                placeholder='Email'
                                {...register('email', {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === 'required' && 'This field is required.'}
                                </p>
                            )}
                            <textarea 
                                className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder='Message'
                                {...register('message', {
                                    required: true,
                                    maxLength: 3000,
                                })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === 'required' && 'This field is required.'}
                                    {errors.message.type === 'maxLength' && 'Max Length is 3000 char.'}
                                </p>
                            )}

                            <button
                                type='submit'
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                            >SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className='relative mt-16 basis-2/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{ 
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                    <div className='md:before:content-envolvetext w-full before:absolute before:bottom-20 before:right-10 before:z-[-1]'>
                        <img 
                            className='w-full'
                        src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
                    </div>
                    </motion.div>
                </div>
            </motion.div>
    </section>
    )
}
export default ContactUs