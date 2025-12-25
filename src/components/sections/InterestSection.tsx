import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const InterestSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const painPoints = [
    {
      icon: '📝',
      title: 'Chép phạt 50 lần',
      text: 'Hôm sau quên sạch. Từ vựng vào tai này, ra tai kia - như nước đổ lá khoai.',
    },
    {
      icon: '🗣️',
      title: 'Học thuộc như vẹt',
      text: '"I go, you go, he goes" - viết bài vẫn sai \'She go...\'. Hỏi lại thì... ậm ừ.',
    },
    {
      icon: '✈️',
      title: 'Não chế độ "máy bay"',
      text: 'Nghe cô giảng ngữ pháp, não tự động... mất kết nối. Mắt nhìn cô mà đầu đang ở sân chơi.',
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--sunset-orange)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--sky-trust)] rounded-full opacity-10 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[var(--charcoal)] leading-tight mb-4">
            HỌC TIẾNG ANH KIỂU CŨ:
            <br />
            <span className="gradient-text">CHÉP 100 LẦN, NHỚ ĐƯỢC... 0 LẦN</span> 📝
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* Pain Point Cards */}
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-2xl mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--charcoal)] mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}

          {/* Result Box - Spans 2 columns on lg, full width on md */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[var(--coral-burst)] to-[var(--energy-red)] rounded-2xl p-6 text-white shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl mb-4">
              😫
            </div>
            <h3 className="text-xl font-bold mb-2">Kết quả?</h3>
            <p className="text-white/90 leading-relaxed">
              Con ghét tiếng Anh. Con sợ bị gọi lên bảng.
              <br />
              Con nghĩ mình "không có khiếu".
            </p>
          </motion.div>
        </motion.div>

        {/* Key Insight - Brain Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 md:mt-14"
        >
          {/* Transition text */}
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Nhưng sự thật là:
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[var(--charcoal)]">
              Không phải con không có khiếu.
              <br />
              <span className="gradient-text">Là phương pháp không có... não.</span> 🧠
            </p>
          </div>

          {/* Brain Insight Card */}
          <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="text-5xl md:text-6xl flex-shrink-0">🧠</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Não bộ không học bằng cách "chép đi chép lại".
                </h3>
                <p className="text-white/90 leading-relaxed md:text-lg">
                  Não học bằng{' '}
                  <strong className="text-white">
                    hình ảnh, cảm xúc, và sự lặp lại TỰ NHIÊN
                  </strong>{' '}
                  - giống như con nhớ bộ phim hoạt hình yêu thích, vì cuốn hút, vì xem mãi không chán.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InterestSection
