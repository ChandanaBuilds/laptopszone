'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Filter,
  X,
} from 'lucide-react'
import { accessories } from '@/lib/data'
import { AccessoryCard } from '@/components/accessory-card'
import { Star } from 'lucide-react'


export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>()
  const [filtersOpen, setFiltersOpen] =
    useState(false)

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

            <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white">
              Laptop Accessories
            </h1>

            <p className="mt-4 text-lg text-slate-200">
              Batteries • Chargers • Keyboards • SSD • Cooling Pads
            </p>

          </div>

        </div>

      </section>

      <section className="py-14">
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4">

            <div className="flex gap-8">

              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                  <h2 className="mb-6 text-2xl font-semibold text-black">
                    Categories
                  </h2>

                  <div className="space-y-1">

                    <button
                      onClick={() => setSelectedCategory(undefined)}
                      className={`w-full rounded-xl px-4 py-3 text-left font-medium transition-all duration-300 ${!selectedCategory
                        ? 'bg-blue-600 text-white'
                        : 'text-black hover:bg-blue-600 hover:text-white'
                        }`}
                    >
                      All Accessories
                    </button>

                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full rounded-xl px-4 py-3 text-left font-medium capitalize transition-all duration-300 ${selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'text-black hover:bg-blue-600 hover:text-white'
                          }`}
                      >
                        {category}
                      </button>
                    ))}

                  </div>

                </div>
              </aside>

              {/* Right Content */}
              <div className="flex-1">

                {/* Mobile Filter Button */}
                <div className="mb-6 flex items-center justify-between lg:hidden">

                  <button
                    onClick={() => setFiltersOpen(true)}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-black shadow-sm"
                  >
                    <Filter size={18} />
                    Categories
                  </button>

                  <p className="text-sm text-slate-500">
                    {filteredAccessories.length} Products
                  </p>

                </div>

                {/* Toolbar */}
                <div className="mb-8 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

                  <div>
                    <h2 className="text-2xl font-semibold text-black">
                      Accessories Collection
                    </h2>

                    <p className="mt-2 text-slate-500">
                      Showing
                      <span className="mx-2 font-bold text-black">
                        {filteredAccessories.length}
                      </span>
                      Products
                    </p>
                  </div>

                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) =>
                        setSortBy(e.target.value as any)
                      }
                      className="appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 pr-10 text-black outline-none"
                    >
                      <option value="featured">
                        Featured
                      </option>

                      <option value="price-low">
                        Price: Low to High
                      </option>

                      <option value="price-high">
                        Price: High to Low
                      </option>

                      <option value="rating">
                        Highest Rated
                      </option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                  </div>

                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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
                          delay: index * 0.05,
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

            </div>

          </div>
        </section>

      </section>
      <AnimatePresence>
        {filtersOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFiltersOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 z-50 h-screen w-[300px] overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold text-black">
                  Categories
                </h2>

                <button
                  onClick={() => setFiltersOpen(false)}
                  className="rounded-xl p-2 hover:bg-slate-100"
                >
                  <X size={22} />
                </button>

              </div>

              <div className="space-y-2">

                <button
                  onClick={() => {
                    setSelectedCategory(undefined)
                    setFiltersOpen(false)
                  }}
                  className={`w-full rounded-xl px-4 py-3 text-left font-medium transition-all duration-300 ${!selectedCategory
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-blue-600 hover:text-white'
                    }`}
                >
                  All Accessories
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setFiltersOpen(false)
                    }}
                    className={`w-full rounded-xl px-4 py-3 text-left font-medium capitalize transition-all duration-300 ${selectedCategory === category
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-blue-600 hover:text-white'
                      }`}
                  >
                    {category}
                  </button>
                ))}

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}