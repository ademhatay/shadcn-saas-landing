import ScrollToTop from '@/hooks/ScrollToTop';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <ScrollToTop />
            <section className="py-16 pt-24" id="contact">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        We would love to hear from you! Please fill out the form below to get in touch.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-left space-y-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <MapPin className="w-6 h-6 mr-2" />
                                <span>123 Main St, Anytown USA</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <Mail className="w-6 h-6 mr-2" />
                                <span>contact@yourcompany.com</span>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <Phone className="w-6 h-6 mr-2" />
                                <span>(123) 456-7890</span>
                            </div>
                        </div>

                        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="text-left text-gray-600 dark:text-gray-400">First Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left text-gray-600 dark:text-gray-400">Last Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-left text-gray-600 dark:text-gray-400">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-left text-gray-600 dark:text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    className="mt-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;