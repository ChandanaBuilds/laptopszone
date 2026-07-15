'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ProductFiltersProps {
  selectedCategory?: string
  onCategoryChange: (category: string | undefined) => void
  onPriceChange: (range: [number, number]) => void
  onRatingChange: (minRating: number) => void
  onInStockChange: (inStock: boolean) => void
  priceRange: [number, number]
  minRating: number
  inStockOnly: boolean
  isOpen: boolean
  onClose: () => void
}

const categories = [
  { id: 'gaming', label: 'Gaming' },
  { id: 'business', label: 'Business' },
  { id: 'student', label: 'Student' },
  { id: 'creator', label: 'Creator' },
  { id: 'ultrabook', label: 'Ultrabook' },
]

const ratings = [
  { value: 5, label: '5 Stars' },
  { value: 4, label: '4+ Stars' },
  { value: 3, label: '3+ Stars' },
]

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  onPriceChange,
  onRatingChange,
  onInStockChange,
  priceRange,
  minRating,
  inStockOnly,
  isOpen,
  onClose,
}:
  ProductFiltersProps) {
  const [categoryOpen, setCategoryOpen] = useState(false)

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Filters Panel */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`
  fixed md:relative
  left-0 top-0
  h-screen md:h-auto
  w-64
  bg-white
  md:border-0
  border-r
  border-slate-200
  z-50 md:z-auto
  overflow-y-auto
  p-0 md:p-0
  space-y-4
`}      >
        <div className="flex justify-between items-center md:hidden">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button onClick={onClose} className="p-1 hover:bg-secondary rounded">
            <X size={20} />
          </button>
        </div>

        <div>
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex w-full items-center justify-between mb-4"
          >
            <h4 className="font-semibold text-black">
              Category
            </h4>

            {categoryOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {categoryOpen && (
            <div className="space-y-2">
              <button
                onClick={() => onCategoryChange(undefined)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === undefined
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-black'
                  }`}
              >
                All Categories
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === cat.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-black'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Price Range */}
        <div>
          <h4 className="font-semibold text-black mb-4">Price Range</h4>
          <div className="space-y-2">
            <div>
              <label className="text-sm text-black block mb-2">
                Min: ${priceRange[0]}
              </label>
              <input
                type="range"
                min="0"
                max="250000"
                value={priceRange[0]}
                onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="text-sm text-black block mb-2">
                Max: ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="3000"
                value={priceRange[1]}
                onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-semibold text-black mb-2">Rating</h4>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <button
                key={rating.value}
                onClick={() => onRatingChange(rating.value === 5 ? 0 : rating.value)}
                className={`block w-full text-left px-3 py-1.5 rounded-lg transition-colors ${minRating === (rating.value === 5 ? 0 : rating.value)
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-black'
                  }`}
              >
                {rating.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stock */}
        <div>
          <h4 className="font-semibold text-black mb-4">Availability</h4>
          <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-secondary transition-colors">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockChange(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <span className="text-black">In Stock Only</span>
          </label>
        </div>
      </motion.div>
    </>
  )
}
