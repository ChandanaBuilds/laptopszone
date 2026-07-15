'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

import { accessories } from '@/lib/data'
import { AccessoryCard } from '@/components/accessory-card'

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>()

  const [sortBy, setSortBy] = useState<
    'featured' |
    'price-low' |
    'price-high' |
    'rating'
  >('featured')

  const categories = [
    ...new Set(
      accessories.map(
        (item) => item.category
      )
    ),
  ]

  const filteredAccessories = useMemo(() => {
    let data = [...accessories]

    if (selectedCategory) {
      data = data.filter(
        (item) =>
          item.category ===
          selectedCategory
      )
    }

    switch (sortBy) {
      case 'price-low':
        data.sort(
          (a, b) =>
            a.price - b.price
        )
        break

      case 'price-high':
        data.sort(
          (a, b) =>
            b.price - a.price
        )
        break

      case 'rating':
        data.sort(
          (a, b) =>
            b.rating - a.rating
        )
        break
    }

    return data
  }, [selectedCategory, sortBy])

  return (
    <>
      {/* HERO */}

      <section className="relative h-[250px] md:h-[380px] overflow-hidden">

        <img
          src="/access.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto max-w-7xl w-full px-6">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
              Premium Collection
            </span>

            <h1 className="mt-5 text-5xl font-bold text-white">
              Laptop Accessories
            </h1>

            <p className="mt-4 text-lg text-slate-200">
              Batteries • Chargers • Keyboards • SSD • Cooling Pads
            </p>

          </div>

        </div>

      </section>

      <section className="py-14">

        <div className="mx-auto max-w-7xl px-4">

          {/* CATEGORY BUTTONS */}

          <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-2">
            <button
              onClick={() =>
                setSelectedCategory(
                  undefined
                )
              }
              className={`rounded-full px-6 py-3 ${!selectedCategory
                ? 'bg-black text-white'
                : 'border border-slate-300'
                }`}
            >
              All Accessories
            </button>

            {categories.map(
              (category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category
                    )
                  }
                  className={`rounded-full px-6 py-3 capitalize ${selectedCategory ===
                    category
                    ? 'bg-black text-white'
                    : 'border border-slate-300'
                    }`}
                >
                  {category}
                </button>
              )
            )}

          </div>

          {/* SORT */}

          <div className="mb-8 flex items-center justify-between">

            <p>
              Showing{' '}
              {
                filteredAccessories.length
              }{' '}
              products
            </p>

            <div className="relative">

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target
                      .value as any
                  )
                }
                className="appearance-none rounded-xl border border-slate-200 px-5 py-3 pr-10"
              >
                <option value="featured">
                  Featured
                </option>

                <option value="price-low">
                  Price Low → High
                </option>

                <option value="price-high">
                  Price High → Low
                </option>

                <option value="rating">
                  Highest Rated
                </option>
              </select>

              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />

            </div>

          </div>

          {/* GRID */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {filteredAccessories.map(
              (item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                  }}
                >
                  <AccessoryCard
                    product={item}
                  />
                </motion.div>
              )
            )}

          </div>

        </div>

      </section>
    </>
  )
}