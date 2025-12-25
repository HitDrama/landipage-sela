import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ObjectionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const failedInvestments = [
    { icon: '🏫', name: 'Trung tâm A', price: '5 triệu/tháng', desc: 'Học 2 năm' },
    { icon: '👨‍🏫', name: 'Gia sư B', price: '500k/buổi', desc: '3 buổi/tuần' },
    { icon: '📱', name: 'App C', price: '2 triệu/năm', desc: 'Premium' },
  ]

  const selaBenefits = [
    'Khi con tin mình làm được → Con sẽ làm được thật',
    'Không cần ép buộc, con tự muốn học',
    'Đơn giản vậy thôi. Nhưng không phải ai cũng biết cách.',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-[var(--sunset-orange)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-[var(--sky-trust)] rounded-full opacity-10 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[var(--charcoal)] leading-tight mb-7">
            "ĐẦU TƯ BAO NHIÊU TIỀN RỒI
            <br />
            <span className="gradient-text block pt-2">MÀ CON VẪN SỢ TIẾNG ANH?"</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Failed Investments */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Ba mẹ không sai. Ba mẹ đã cố gắng hết sức:
            </p>

            {/* Failed Investments List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-4 mb-8"
            >
              {failedInvestments.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-[var(--charcoal)]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[var(--coral-burst)]">{item.price}</p>
                    <span className="text-xl">❌</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Result Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[var(--charcoal)] to-gray-800 rounded-2xl p-6 text-white"
            >
              <p className="text-lg font-semibold mb-3">
                Nhưng con vẫn sợ. Vẫn ghét. Vẫn "không có khiếu".
              </p>
              <p className="text-white/80">
                Vấn đề không phải thiếu tiền hay thiếu cố gắng. Vấn đề là{' '}
                <span className="text-[var(--sunset-orange)] font-semibold">
                  phương pháp không match với não bộ của con
                </span>.
              </p>
            </motion.div>

            {/* Visual Metaphor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-4 md:gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
                <div className="text-center">
                  <span className="text-5xl md:text-6xl block mb-2">🚲</span>
                  <p className="text-xs text-gray-400">Phương pháp cũ</p>
                </div>
                <span className="text-3xl md:text-4xl text-gray-300 font-bold">≠</span>
                <div className="text-center">
                  <span className="text-5xl md:text-6xl block mb-2">🏎️</span>
                  <p className="text-xs text-gray-400">Kỳ vọng của bạn</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic text-sm md:text-base">
                "Muốn con lái siêu xe vươn ra biển lớn, nhưng cho con đi học... lái xe đạp."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - SELA Difference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* SELA Solution Box */}
            <div className="bg-gradient-to-br from-[var(--coral-burst)] to-[var(--energy-red)] rounded-2xl p-6 md:p-8 text-white shadow-xl sticky top-8">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl mb-6 backdrop-blur-sm">
                🎯
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                SELA khác ở chỗ:
              </h3>

              {/* Main Message */}
              <div className="bg-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm border border-white/20">
                <p className="text-lg leading-relaxed">
                  Chúng tôi không "nhồi" kiến thức vào đầu con.
                  <br /><br />
                  Chúng tôi <strong className="text-white">"bật công tắc"</strong> niềm tin trong con.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 mb-6">
                {selaBenefits.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">✓</span>
                    </div>
                    <p className="text-white/95 leading-relaxed">{text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-white rounded-xl p-5 text-center"
              >
                <p className="text-[var(--coral-burst)] font-bold text-lg md:text-xl">
                  🔑 Khi con tin mình làm được
                </p>
                <p className="text-[var(--charcoal)] font-bold text-lg md:text-xl mt-1">
                  → Con sẽ làm được thật!
                </p>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ObjectionSection
