import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-gradient-mesh">
      {/* Decorative blobs with parallax effect */}
      <motion.div
        className="blob blob-orange w-[300px] h-[300px] md:w-[500px] md:h-[500px] -top-[100px] -left-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="blob blob-blue w-[400px] h-[400px] md:w-[600px] md:h-[600px] -bottom-[150px] -right-[150px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            {/* Pre-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-2xl font-semibold uppercase tracking-wider text-[var(--coral-burst)] mb-4"
            >
              Không phải con lười. Không phải con kém.
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[clamp(32px,8vw,72px)] font-extrabold text-[var(--charcoal)] leading-[1.1] mb-6"
            >
              CON CHỈ ĐANG{' '}
              <span className="gradient-text">SỢ TIẾNG ANH...</span>
              <br />
              <span className="text-[0.45em] md:text-[0.30em] font-medium text-gray-500 whitespace-nowrap">
                Giáo trình & cách học hiện tại đang khiến con SỢ
              </span>
              <br />
              <span className="text-[0.65em] md:text-[0.50em] font-bold gradient-text">
                SELA giúp con "HẾT SỢ"
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[clamp(16px,3vw,20px)] text-[#4A5568] max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Ba mẹ cho con học thêm, thuê gia sư, mua sách, cài app... Nhưng mỗi lần mở miệng nói tiếng Anh, con vẫn{' '}
              <strong className="text-[var(--coral-burst)]">đứng hình như wifi lag</strong>.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="#form-dang-ky"
                className="inline-flex items-center gap-2 md:gap-3 btn-gradient text-white text-sm md:text-xl font-bold px-5 md:px-8 py-3 md:py-4 rounded-full animate-pulse-cta whitespace-nowrap"
              >
                <span>XEM CON "HẾT SỢ" NHƯ THẾ NÀO</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Floating emojis */}
            <motion.span
              className="absolute -top-[10%] left-[10%] text-3xl md:text-4xl pointer-events-none"
              animate={{ y: [-5, 10, -5], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              😵
            </motion.span>
            <motion.span
              className="absolute top-[20%] -right-[5%] text-4xl md:text-5xl pointer-events-none"
              animate={{ y: [-8, 12, -8], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              📚
            </motion.span>
            <motion.span
              className="absolute bottom-[10%] -left-[5%] text-3xl pointer-events-none"
              animate={{ y: [-6, 8, -6], rotate: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              😰
            </motion.span>
            <motion.span
              className="absolute -bottom-[5%] right-[15%] text-2xl md:text-3xl pointer-events-none"
              animate={{ y: [-4, 6, -4], rotate: [0, -3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              💭
            </motion.span>

            {/* Main visual placeholder */}
            <img
              src="/img-banner.png"
              alt="Em bé ngồi trước sách"
              className="w-full max-w-[350px] md:max-w-[500px] rounded-3xl shadow-lg ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
