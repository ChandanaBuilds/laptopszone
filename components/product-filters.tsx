'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface ProductFiltersProps {
  selectedCategory?: string
  onCategoryChange: (category: string | undefined) => void
  onPriceChange: (range: [number, number]) => void
  onInStockChange: (inStock: boolean) => void
  priceRange: [number, number]
  inStockOnly: boolean
}

const categories = [
  { id: 'gaming', label: 'Gaming' },
  { id: 'business', label: 'Business' },
  { id: 'student', label: 'Student' },
  { id: 'creator', label: 'Creator' },
  { id: 'ultrabook', label: 'Ultrabook' },
]

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN').format(price)

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  onPriceChange,
  onInStockChange,
  priceRange,
  inStockOnly,
}: ProductFiltersProps) {
  const [categoryOpen, setCategoryOpen] = useState(true)
  const [priceOpen, setPriceOpen] = useState(true)
  const [availabilityOpen, setAvailabilityOpen] = useState(true)

  return (
    <div className="space-y-8">
      {/* Category */}
      <div className="border-b border-slate-100 pb-6">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex w-full items-center justify-between"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
            Category
          </h3>

          {categoryOpen ? (
            <ChevronUp size={18} className="text-slate-500" />
          ) : (
            <ChevronDown size={18} className="text-slate-500" />
          )}
        </button>

        <AnimatePresence>
          {categoryOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              <button
                onClick={() => onCategoryChange(undefined)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${selectedCategory === undefined
                  ? 'bg-primary text-white'
                  : 'text-slate-700 hover:bg-slate-100'
                  }`}
              >
                All Categories
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Range */}
      <div className="border-b border-slate-100 pb-6">
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex w-full items-center justify-between"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
            Price Range
          </h3>

          {priceOpen ? (
            <ChevronUp size={18} className="text-slate-500" />
          ) : (
            <ChevronDown size={18} className="text-slate-500" />
          )}
        </button>

        <AnimatePresence>
          {priceOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-5 space-y-6 overflow-hidden"
            >
              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-600">
                  <span>Minimum</span>
                  <span>₹{formatPrice(priceRange[0])}</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="250000"
                  step="5000"
                  value={priceRange[0]}
                  onChange={(e) =>
                    onPriceChange([
                      Number(e.target.value),
                      priceRange[1],
                    ])
                  }
                  className="w-full cursor-pointer accent-primary"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-600">
                  <span>Maximum</span>
                  <span>₹{formatPrice(priceRange[1])}</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="250000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    onPriceChange([
                      priceRange[0],
                      Number(e.target.value),
                    ])
                  }
                  className="w-full cursor-pointer accent-primary"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>



      {/* Availability */}
      <div>
        <button
          onClick={() => setAvailabilityOpen(!availabilityOpen)}
          className="flex w-full items-center justify-between"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
            Availability
          </h3>

          {availabilityOpen ? (
            <ChevronUp size={18} className="text-slate-500" />
          ) : (
            <ChevronDown size={18} className="text-slate-500" />
          )}
        </button>

        <AnimatePresence>
          {availabilityOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) =>
                    onInStockChange(e.target.checked)
                  }
                  className="h-4 w-4 accent-primary"
                />

                <span className="text-sm font-medium text-slate-700">
                  In Stock Only
                </span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}