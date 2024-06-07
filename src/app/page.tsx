import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { BadgeCheck, Globe, Tag } from "lucide-react";
import Link from "next/link";

const perk = [
  {
    name: "Wide Selection of Digital Products",
    description: "Find everything you need in one place",
    Icon: Globe,
  },
  {
    name: "Exclusive Deals and Discounts",
    description:
      "Get access to special offers and discounts available only to Digi members.",
    Icon: Tag,
  },
  {
    name: "Trusted Sellers and Quality Assurance",
    description:
      "All products are vetted by our team to ensure top-notch quality and reliability",
    Icon: BadgeCheck,
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Marketplace for high-quality{" "}
            <span className="text-violet-500">Digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digi. Discover top-quality digital products from trusted
            sellers ensures you get the best value and innovation at your
            fingertips. Join our vibrant community of creators and consumers,
            and start exploring today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Explore trending product
            </Link>
            <Button variant="ghost">Join as a Seller &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perk.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-violet-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
