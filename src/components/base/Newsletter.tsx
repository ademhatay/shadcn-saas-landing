import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Newsletter = () => {
    return <>
        <section className="w-full py-12 md:py-24 lg:py-32 border-y-[1px]">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Stay up to date with our latest news
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Subscribe to our newsletter and be the first to know about new features, updates, and exclusive offers.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <form className="flex space-x-2">
                        <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                        <Button type="submit">Subscribe</Button>
                    </form>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        We'll never share your email. Read our {" "}
                        <a className="underline underline-offset-2" href="#">
                            privacy policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    </>
}

export default Newsletter
