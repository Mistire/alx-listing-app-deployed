"use client";

import Image from "next/image";
import { Star, Bed, ShowerHead, Users } from "lucide-react";
import { PropertyProps } from "@/interfaces";

export default function PropertyCard({
  name,
  address,
  rating,
  price,
  image,
  discount,
  offers,
}: PropertyProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      {/* Image with discount badge */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-600">
          {address.city}, {address.country}
        </p>

        {/* Rating */}
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Star className="w-4 h-4 text-yellow-500 mr-1" />
          {rating}
        </div>

        {/* Offers (beds, showers, occupants) */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" /> {offers.bed}
          </div>
          <div className="flex items-center gap-1">
            <ShowerHead className="w-4 h-4" /> {offers.shower}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" /> {offers.occupants}
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto pt-4">
          <p className="text-blue-600 font-semibold">${price} / night</p>
        </div>
      </div>
    </div>
  );
}
