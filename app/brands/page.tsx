// 'use client'

// import { motion } from 'framer-motion'
// import { brands, laptops } from '@/lib/data'
// import { ProductCard } from '@/components/product-card'
// import { useState } from 'react'

// export default function BrandsPage() {
//   const [selectedBrand, setSelectedBrand] = useState<string | undefined>()

//   const brandProducts = selectedBrand
//     ? laptops.filter((l) => l.brand === brands.find((b) => b.id === selectedBrand)?.name)
//     : []

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-12 md:py-16 bg-secondary/30 border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Brands</h1>
//             <p className="text-muted-foreground text-lg">
//               Featuring premium laptop brands trusted worldwide
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Brands Grid */}
//           <div className="mb-16">
//             <h2 className="text-2xl font-bold mb-8">Featured Brands</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {brands.map((brand, index) => (
//                 <motion.button
//                   key={brand.id}
//                   onClick={() => setSelectedBrand(selectedBrand === brand.id ? undefined : brand.id)}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   whileHover={{ y: -4 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className={`p-8 rounded-lg border-2 transition-all text-left ${
//                     selectedBrand === brand.id
//                       ? 'border-primary bg-primary/10'
//                       : 'border-border hover:border-primary/50'
//                   }`}
//                 >
//                   <div className="text-4xl mb-4">
//                     {brand.name === 'TechForce' && '⚡'}
//                     {brand.name === 'ProTech' && '💼'}
//                     {brand.name === 'CompactTech' && '✨'}
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
//                   <p className="text-muted-foreground">{brand.description}</p>
//                   <p className="text-sm text-primary font-semibold mt-4">
//                     {laptops.filter((l) => l.brand === brand.name).length} Products
//                   </p>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Brand Products */}
//           {selectedBrand && (
//             <motion.section
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold">
//                   {brands.find((b) => b.id === selectedBrand)?.name} Laptops
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {brandProducts.map((laptop, index) => (
//                   <motion.div
//                     key={laptop.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.05 }}
//                   >
//                     <ProductCard
//                       product={laptop}
//                       href={`/laptops/${laptop.id}`}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }
