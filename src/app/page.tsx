import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Marketplace for high-quality{" "}
            <span className="text-orange-500">Digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digi. Discover top-quality digital products from trusted
            sellers ensures you get the best value and innovation at your
            fingertips. Join our vibrant community of creators and consumers,
            and start exploring today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse trending product
            </Link>
            <Button variant="ghost">Search Categories &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}

        <section></section>
      </MaxWidthWrapper>
    </>
  );
}
