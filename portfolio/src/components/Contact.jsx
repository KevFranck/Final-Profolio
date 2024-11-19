import emailjs from '@emailjs/browser'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email){
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = "Email is invalid"
        }
        if (!formData.message) errors.message = 'Message is riquered'
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_k38j7q5",
                    "template_xwtup0e",
                    formData,
                    "WuOqmi6ic8-TiBJz1",
                )
                .then((response) => {
                    toast.success('Message sent successfully')
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                    toast.error('Failed to send message')
                })
                .finaly(()=>{
                    setIsSending(false)
                })
        }
    }
  return (
    <div className="m-auto p-4 lg:w-3/4" id='contact'>
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>Let us Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4 flex space-x-4'>
            <div className='lg:w-1/2'>
                <input type="text"
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                />
                {errors.name && <p className='text-red-500'>{errors.name}</p>}
            </div>
            <div className='lg:w-1/2'>
                <input type="text"
                    id='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
        </div>
        <div className='mb-4'>
                <textarea
                    id='message'
                    name='message'
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
                    rows='6'
                />
                {errors.message && <p className='text-red-500'>{errors.message}</p>}
            </div>
            <button type="submit" className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2
            text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={isSending}
            >
                <div className='flex items-center justify-center gap-2'>
                    {isSending ? "Sending..." : "Send"}
                    <FiSend/>
                </div>
            </button>
      </form>
    </div>
  )
}

export default Contact
