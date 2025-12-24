import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-lg md:text-xl italic mb-6"
          >
            Không phải con lười. Không phải con dốt.
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8"
          >
            CON CHỈ ĐANG SỢ TIẾNG ANH...
            <br />
            <span className="gradient-text">
              VÀ CHẲNG AI DẠY CON CÁCH HẾT SỢ.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 space-y-4"
          >
            <p>
              Ba mẹ cho con học thêm, thuê gia sư, mua sách, cài app... Nhưng mỗi lần mở miệng nói tiếng Anh, con vẫn{' '}
              <span className="font-semibold text-gray-800">đứng hình như wifi lag</span>.
            </p>
            <p>
              Vấn đề không nằm ở con. Vấn đề là{' '}
              <span className="font-bold text-orange-600">
                chưa ai cho con một lý do để TIN rằng con làm được
              </span>.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#form-dang-ky"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-cta"
            >
              <span>👉</span>
              <span>XEM CON "HẾT SỢ" NHƯ THẾ NÀO</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Floating emoji decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-10 text-6xl animate-float hidden md:block"
          >
            😰
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-20 right-10 text-6xl animate-float hidden md:block"
            style={{ animationDelay: '1s' }}
          >
            📚
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
