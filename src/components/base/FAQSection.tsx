import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            What is your refund policy?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400">
                            If you're not satisfied with your purchase, you can request a refund within 30 days.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            How do I access my account?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400">
                            You can access your account by clicking on the "Login" button at the top right corner of the page.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Can I change my subscription plan later?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400">
                            Yes, you can change your subscription plan anytime from your account settings.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Do you offer customer support?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400">
                            Yes, we offer 24/7 customer support via email and live chat.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;