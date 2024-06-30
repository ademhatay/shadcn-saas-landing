import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import ScrollToTop from "@/hooks/ScrollToTop";

const PasswordReset = () => {
    return (
        <>
            <ScrollToTop />
            <section className="py-16 min-h-screen flex items-center justify-center">
                <div className="container max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center">
                        Password Reset
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center">
                        Enter the 4-digit code sent to your email.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <InputOTP maxLength={4}>
                            <InputOTPGroup className="flex space-x-4">
                                <InputOTPSlot
                                    index={0}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md p-2 w-12 h-12 text-center"
                                />
                                <InputOTPSlot
                                    index={1}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md p-2 w-12 h-12 text-center"
                                />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup className="flex space-x-4">
                                <InputOTPSlot
                                    index={2}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md p-2 w-12 h-12 text-center"
                                />
                                <InputOTPSlot
                                    index={3}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md p-2 w-12 h-12 text-center"
                                />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <Input className="w-full" type="password" placeholder="New Password" />
                            <Input className="w-full" type="password" placeholder="Confirm New Password" />
                        </div>
                        <Button className="w-full mt-6" type="submit">
                            Reset Password
                        </Button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default PasswordReset;