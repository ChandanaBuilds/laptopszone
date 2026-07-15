'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface Props {
    product: any
}

export function AccessoryCard({ product }: Props) {
    return (
        <Link href={`/accessories/${product.id}`}>
            <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">

                <div className="relative h-64 bg-slate-50">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="p-5">
                    <span className="text-xs uppercase text-slate-500">
                        {product.category}
                    </span>

                    <h3 className="mt-2 text-lg font-bold line-clamp-2">
                        {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                        {product.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="text-sm">
                            {product.rating}
                        </span>

                        <span className="text-sm text-slate-500">
                            ({product.reviews})
                        </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-2xl font-bold text-black">
                            ₹{product.price}
                        </p>

                        <span
                            className={`text-sm font-medium ${product.inStock
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                }`}
                        >
                            {product.inStock
                                ? 'In Stock'
                                : 'Out of Stock'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}