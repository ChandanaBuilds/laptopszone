// 'use client'

// import { motion } from 'framer-motion'
// import { laptops, accessories } from '@/lib/data'
// import { ProductCard } from '@/components/product-card'

// export default function DealsPage() {
//   const allDiscountedProducts = [
//     ...laptops.filter((l) => l.discount),
//     ...accessories.filter((a) => a.discount),
//   ].sort((a, b) => (b.discount || 0) - (a.discount || 0))

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-12 md:py-16 bg-gradient-to-r from-primary/20 to-primary/5 border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
//               <p className="text-primary font-semibold">Limited Time Offers</p>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Deals</h1>
//             <p className="text-muted-foreground text-lg">
//               Save big on our best-selling laptops and accessories
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Featured Deals */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold mb-8">Today&apos;s Best Deals</h2>

//             {allDiscountedProducts.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {allDiscountedProducts.map((product, index) => (
//                   <motion.div
//                     key={product.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.05 }}
//                     viewport={{ once: true }}
//                   >
//                     <ProductCard
//                       product={product}
//                       href={`/${'brand' in product ? 'laptops' : 'accessories'}/${product.id}`}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <p className="text-muted-foreground text-lg">No deals available right now.</p>
//               </div>
//             )}
//           </div>

//           {/* Why Shop With Us */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="py-12 px-8 rounded-2xl bg-secondary/30 border border-border"
//           >
//             <h2 className="text-3xl font-bold mb-8 text-center">Why Shop Our Deals?</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl mb-4">✓</div>
//                 <h3 className="font-semibold text-lg mb-2">Verified Prices</h3>
//                 <p className="text-muted-foreground">All discounts are verified and current</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">🚚</div>
//                 <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
//                 <p className="text-muted-foreground">Quick delivery on all orders</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl mb-4">💬</div>
//                 <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
//                 <p className="text-muted-foreground">24/7 customer support available</p>
//               </div>
//             </div>
//           </motion.section>
//         </div>
//       </div>
//     </>
//   )
// }
