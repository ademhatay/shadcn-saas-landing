import { CheckIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";


const Pricing = () => {
    return <>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mt-10" id="pricing">
            Pricing
        </h3>
        <p className="text-center mt-5 mb-10 text-lg font-normal">
            Choose a plan that works for you
        </p>
        <Tabs className="w-full max-w-4xl mx-auto my-10 mb-16" defaultValue="monthly">
            <TabsList className="grid grid-cols-2 max-w-sm mx-auto">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle>Starter</CardTitle>
                            <CardDescription>Perfect for individuals</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold">$9</div>
                                <div className="text-gray-500 dark:text-gray-400">per month</div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    1 user
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    1 GB storage
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Basic features
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>Perfect for small teams</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold">$29</div>
                                <div className="text-gray-500 dark:text-gray-400">per month</div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    5 users
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    10 GB storage
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Advanced features
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>Perfect for large organizations</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold">$99</div>
                                <div className="text-gray-500 dark:text-gray-400">per month</div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Unlimited users
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Unlimited storage
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Enterprise features
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="yearly">
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle>Starter</CardTitle>
                            <CardDescription>Perfect for individuals</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold">$99</div>
                                <div className="text-gray-500 dark:text-gray-400">per year</div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    1 user
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    1 GB storage
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Basic features
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>Perfect for small teams</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold">$299</div>
                                <div className="text-gray-500 dark:text-gray-400">per year</div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    5 users
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    10 GB storage
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Advanced features
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>Perfect for large organizations</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-4xl font-bold">$999</div>
                                <div className="text-gray-500 dark:text-gray-400">per year</div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Unlimited users
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Unlimited storage
                                </li>
                                <li>
                                    <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                                    Enterprise features
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
    </>
}

export default Pricing;
