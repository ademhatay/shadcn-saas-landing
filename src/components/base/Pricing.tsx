import { CheckIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

const defaultPlans = {
    monthly: [
        { title: 'Starter', description: 'Perfect for individuals', price: 9, features: ['1 user', '1 GB storage', 'Basic features'], highlighted: false },
        { title: 'Pro', description: 'Perfect for small teams', price: 29, features: ['5 users', '10 GB storage', 'Advanced features'], highlighted: true },
        { title: 'Enterprise', description: 'Perfect for large organizations', price: 99, features: ['Unlimited users', 'Unlimited storage', 'Enterprise features'], highlighted: false }
    ],
    yearly: [
        { title: 'Starter', description: 'Perfect for individuals', price: 99, features: ['1 user', '1 GB storage', 'Basic features'], highlighted: false },
        { title: 'Pro', description: 'Perfect for small teams', price: 299, features: ['5 users', '10 GB storage', 'Advanced features'], highlighted: true },
        { title: 'Enterprise', description: 'Perfect for large organizations', price: 999, features: ['Unlimited users', 'Unlimited storage', 'Enterprise features'], highlighted: false }
    ]
};

const Pricing = () => {

    return (
        <div id="pricing">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-10" id="pricing">
                Pricing
            </h3>
            <p className="text-center mt-5 mb-10 text-lg font-normal">
                Choose a plan that works for you
            </p>
            <Tabs className="w-full max-w-4xl mx-auto my-10 mb-16 px-5" defaultValue="monthly">
                <TabsList className="grid grid-cols-2 max-w-sm mx-auto">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {defaultPlans.monthly.map((plan, index) => (
                            <Card key={index} className={`flex flex-col h-full ${plan.highlighted ? 'border-2 border-red-500' : ''}`}>
                                <CardHeader>
                                    <CardTitle>{plan.title}</CardTitle>
                                    <CardDescription>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="text-4xl font-bold">${plan.price}</div>
                                        <div className="text-gray-500 dark:text-gray-400">per month</div>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="yearly">
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {defaultPlans.yearly.map((plan, index) => (
                            <Card key={index} className={`flex flex-col h-full ${plan.highlighted ? 'border-2 border-red-500' : ''}`}>
                                <CardHeader>
                                    <CardTitle>{plan.title}</CardTitle>
                                    <CardDescription>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="text-4xl font-bold">${plan.price}</div>
                                        <div className="text-gray-500 dark:text-gray-400">per year</div>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Pricing;