'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, Filter, ChevronDown } from 'lucide-react'

import { laptops } from '@/lib/laptops'
import { ProductCard } from '@/components/product-card'
import { ProductFilters } from '@/components/product-filters'

export default function LaptopsPage() {
  const [filtersOpen, setFiltersOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] =
    useState<string>()

  const [priceRange, setPriceRange] = useState<
    [number, number]
  >([0, 250000])

  const [minRating, setMinRating] = useState(0)

  const [inStockOnly, setInStockOnly] =
    useState(false)

  const [search, setSearch] = useState('')

  const [sortBy, setSortBy] = useState<
    'featured' | 'price-low' | 'price-high' | 'rating'
  >('featured')

  const filteredLaptops = useMemo(() => {
    let data = [...laptops]

    if (selectedCategory) {
      data = data.filter(
        (item) => item.category === selectedCategory
      )
    }

    if (search.trim()) {
      data = data.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.brand
            .toLowerCase()
            .includes(search.toLowerCase())
      )
    }

    data = data.filter(
      (item) =>
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    )

    data = data.filter(
      (item) => item.rating >= minRating
    )

    if (inStockOnly) {
      data = data.filter(
        (item) => item.inStock
      )
    }

    switch (sortBy) {
      case 'price-low':
        data.sort((a, b) => a.price - b.price)
        break

      case 'price-high':
        data.sort((a, b) => b.price - a.price)
        break

      case 'rating':
        data.sort((a, b) => b.rating - a.rating)
        break
    }

    return data
  }, [
    selectedCategory,
    priceRange,
    minRating,
    inStockOnly,
    sortBy,
    search,
  ])

  return (
    <>
      {/* Hero */}

      <section className="relative h-[230px] md:h-[350px] overflow-hidden">

        <Image
          src="/laptop.jpg"
          alt="Laptop Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto max-w-7xl w-full px-6">

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .6,
              }}
              className="max-w-xl"
            >

              <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black">
                Latest Collection
              </span>

              <h1 className="mt-5 text-5xl font-bold text-white">
                Find Your Perfect Laptop
              </h1>

              <p className="mt-4 text-lg text-white">
                Dell • HP • Lenovo • ASUS • Apple • MSI
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="-mt-10 relative z-20">

        <div className="mx-auto max-w-7xl px-4">

          <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl p-6">

            <div className="flex flex-col gap-4 lg:flex-row">

              <div className="relative flex-1">

                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search Dell, HP, Lenovo..."
                  className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-primary"
                />

              </div>

              <button
                className="rounded-2xl bg-primary px-8 py-4 font-semibold text-black md:hidden"
                onClick={() =>
                  setFiltersOpen(true)
                }
              >
                <div className="flex items-center gap-2">

                  <Filter size={18} />

                  Filters

                </div>

              </button>

            </div>

          </div>

        </div>

      </section>
      {/* Products */}

      <section className="py-14">

        <div className="mx-auto max-w-7xl px-4">

          <div className="flex gap-8">

            {/* Desktop Filters */}

            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="text-2xl font-bold mb-6">
                  Filters
                </h2>

                <ProductFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  onPriceChange={setPriceRange}
                  onRatingChange={setMinRating}
                  onInStockChange={setInStockOnly}
                  priceRange={priceRange}
                  minRating={minRating}
                  inStockOnly={inStockOnly}
                  isOpen={true}
                  onClose={() => { }}
                />

              </div>
            </aside>
            {/* Products */}

            <div className="flex-1">

              {/* Toolbar */}

              <div className="mb-8 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Available Laptops
                  </h2>

                  <p className="mt-2 text-slate-500">

                    Showing

                    <span className="mx-2 font-bold text-black">

                      {filteredLaptops.length}

                    </span>

                    Products

                  </p>

                </div>

                <div className="relative">

                  <select
                    aria-label="Sort laptops"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as any)
                    }
                    className="appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 pr-10 outline-none transition focus:border-primary"
                  >

                    <option value="featured">

                      Featured

                    </option>

                    <option value="price-low">

                      Price : Low to High

                    </option>

                    <option value="price-high">

                      Price : High to Low

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

              {filteredLaptops.length > 0 ? (

                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                  {filteredLaptops.map((laptop, index) => (

                    <motion.div
                      key={laptop.id}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * .05,
                      }}
                    >

                      <ProductCard
                        product={laptop}
                        href={`/laptops/${laptop.id}`}
                      />

                    </motion.div>

                  ))}

                </div>

              ) : (

                <div className="rounded-3xl border border-slate-200 bg-white py-20 text-center">

                  <h3 className="text-3xl font-bold">

                    No Products Found

                  </h3>

                  <p className="mt-3 text-black">

                    Try changing your filters.

                  </p>

                  <button
                    onClick={() => {

                      setSelectedCategory(undefined)

                      setPriceRange([
                        0,
                        250000,
                      ])

                      setMinRating(0)

                      setInStockOnly(false)

                      setSearch('')

                    }}
                    className="mt-8 rounded-xl bg-primary px-8 py-3 font-semibold text-white "
                  >

                    Reset Filters

                  </button>

                </div>

              )}
            </div>

          </div>

        </div>

      </section>

      {/* Mobile Filters */}

      <ProductFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onPriceChange={setPriceRange}
        onRatingChange={setMinRating}
        onInStockChange={setInStockOnly}
        priceRange={priceRange}
        minRating={minRating}
        inStockOnly={inStockOnly}
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />

      {/* Bottom CTA */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-4">

          <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-primary to-blue-700 p-10 text-center text-white shadow-xl">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            >

              <h2 className="text-4xl font-bold">

                Can't Find the Laptop You're Looking For?

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">

                Contact our experts and we'll help you choose the perfect
                laptop based on your budget and requirements.

              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href="tel:+919966111637"
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-primary transition "
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919966111637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition "
                >
                  💬 WhatsApp Us
                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </>

  )

}