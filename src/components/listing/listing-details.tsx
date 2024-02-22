/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qka0zLFOl3A
 */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export function ListingDetails() {
  return (
    <>
      <div className="bg-gray-50 py-24">
        <div className="md:max-w-screen-xl mx-auto px-4 md:px-6 flex justify-center">
          <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4 col-span-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Modern Family Home
                </h1>
                <div className="flex items-center gap-2">
                  <LocateIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Miami, FL
                  </span>
                </div>
                <h2 className="text-2xl font-bold">$1,200,000</h2>
              </div>
              <div className="grid gap-2">
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Beautifully designed home in a quiet neighborhood, perfect for
                  families. Close to schools and parks. Open floor plan with
                  modern kitchen and spacious living areas. Large backyard with
                  a deck for entertaining.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <BedIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">3 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <BathIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">2 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <AreaChartIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">1,800 sqft</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Spacious Backyard</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Perfect for kids to play and for hosting outdoor
                    get-togethers.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Modern Kitchen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sleek design with stainless steel appliances and ample
                    storage.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Master Suite</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Spacious and comfortable with a walk-in closet and en-suite
                    bathroom.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Open Floor Plan</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The living and dining areas flow seamlessly, creating a
                    bright and welcoming space.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Button size="lg" variant="outline">
                  Schedule a Tour
                </Button>
                <Button size="lg" variant="outline">
                  Make an Offer
                </Button>
              </div>
            </div>
            <div className="grid gap-4 col-span-2 lg:justify-center">
              <img
                alt="House"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-100 shrink-0"
                height="500"
                src="/placeholder.svg"
                width="700"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="md:max-w-screen-xl mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4 col-span-1">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-5xl">
                  Description
                </h2>
                <p className="text-gray-300 dark:text-gray-400">
                  Beautifully designed home in a quiet neighborhood, perfect for
                  families. Close to schools and parks. Open floor plan with
                  modern kitchen and spacious living areas. Large backyard with
                  a deck for entertaining.
                </p>
              </div>
            </div>
            <div className="grid gap-4 col-span-2 lg:justify-center">
              <div className="grid gap-4">
                <img
                  alt="House"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-100 shrink-0"
                  height="500"
                  src="/placeholder.svg"
                  width="700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 py-24">
        <section className="md:max-w-screen-xl mx-auto px-4 md:px-6 py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 col-span-1">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Features
                  </h2>
                  <ul className="grid gap-2 py-4">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Spacious Backyard
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Modern Kitchen
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Master Suite
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Open Floor Plan
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 col-span-2 lg:justify-center">
                <img
                  alt="House"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-100 shrink-0"
                  height="500"
                  src="/placeholder.svg"
                  width="700"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="md:max-w-screen-xl mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4 col-span-1">
              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                  Photo Gallery
                </h2>
              </div>
            </div>
            <div className="grid gap-4 col-span-2 lg:justify-center">
              <Carousel className="w-full p-1">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <img
                        alt="House"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-100 shrink-0"
                        height="500"
                        src="/placeholder.svg"
                        width="700"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="md:max-w-screen-xl mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4 col-span-1">
              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                  Contact Agent
                </h2>
                <p className="text-gray-200">
                  Ready to make an offer or want to schedule a tour? Contact our
                  agent for more information.
                </p>
              </div>
              <form className="grid gap-4 md:grid-cols-1">
                <div className="grid gap-2">
                  <Label className="text-sm text-gray-200" htmlFor="name">
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm text-gray-200" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm text-gray-200" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    className="min-h-[100px] resize-y"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="grid gap-2">
                  <Button size="lg">Send</Button>
                </div>
              </form>
            </div>
            <div className="grid gap-4 col-span-2 lg:justify-center my-auto">
              <div className="grid gap-4">
                <img
                  alt="Agent"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-100 shrink-0"
                  height="500"
                  src="/placeholder.svg"
                  width="700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function BedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function BathIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  );
}

function AreaChartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M7 12v5h12V8l-5 5-4-4Z" />
    </svg>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
