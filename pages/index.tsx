import Image from "next/image";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="/public/assets/images/Image1.png" // <- start with slash!
          alt="Hero Background"
          fill
          priority
          className="object-cover brightness-75 hidden md:block"
        />

        <Image
          src="/public/assets/images/Image1_mobile.png" // <- start with slash!
          alt="Hero Background Mobile"
          fill
          priority
          className="object-cover brightness-75 md:hidden"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex gap-3 flex-wrap">
          {FILTERS.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-6">Popular Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, idx) => (
            <PropertyCard key={idx} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
}
