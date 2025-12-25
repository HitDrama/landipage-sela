import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TransformationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const transformations = [
    {
      emojisBefore: '😰',
      emojisAfter: '😎',
      title: 'Từ SỢ sang TỰ TIN',
      before: 'Cô gọi tên → Tim đập loạn → Cúi mặt xuống bàn',
      after: 'Cô gọi tên → Đứng dậy → Trả lời rõ ràng → Cả lớp ngạc nhiên',
      gradient: 'from-[#4FC3F7] to-[#667eea]',
    },
    {
      emojisBefore: '😫',
      emojisAfter: '🎮',
      title: 'Từ BỊ ÉP sang TỰ NGUYỆN',
      before: '"Con ơi học tiếng Anh đi!" → "Dạ..." → Lướt điện thoại',
      after: 'Con tự mở video học, ba mẹ phải nhắc: "Thôi nghỉ đi con!"',
      gradient: 'from-[#F687B3] to-[#ED64A6]',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-cream relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -right-20 w-80 h-80 bg-[var(--sky-trust)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 left-10 w-64 h-64 bg-[var(--sunset-orange)] rounded-full opacity-10 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[var(--charcoal)] leading-tight mb-4">
            TỪ "CON KHÔNG BIẾT Ạ"
            <br />
            <span className="gradient-text">→ "ĐỂ CON TRẢ LỜI!"</span>
          </h2>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-gray-600 mb-12 md:mb-16"
        >
          Chỉ cần con tin <strong className="text-[var(--charcoal)]">"mình làm được"</strong>, mọi thứ sẽ khác.
        </motion.p>

        {/* Transformation Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Main Transformation Cards */}
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Emoji Header */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="text-4xl">{item.emojisBefore}</span>
                <span className="text-2xl font-bold text-gray-400">→</span>
                <span className="text-4xl">{item.emojisAfter}</span>
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
              >
                {item.title}
              </h3>

              {/* Before */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Trước
                </p>
                <div className="bg-gray-100 rounded-xl p-4 border-l-4 border-gray-300">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.before}
                  </p>
                </div>
              </div>

              {/* After */}
              <div>
                <p className="text-xs font-semibold text-[var(--fresh-mint)] uppercase tracking-wider mb-2">
                  Sau
                </p>
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-[var(--fresh-mint)]">
                  <p className="text-gray-800 text-sm font-medium leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Domino Effect Card - Special Dark Theme */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[var(--charcoal)] to-gray-800 rounded-2xl p-6 text-white shadow-lg md:col-span-2 lg:col-span-1"
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-5">
              <span className="text-5xl">💡</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-5 text-white">
              Hiệu ứng DOMINO
            </h3>

            {/* Content */}
            <p className="text-white/80 text-sm leading-relaxed text-center mb-4">
              Khi con chiến thắng "con quái vật" mang tên tiếng Anh, con sẽ nhận ra:
            </p>

            {/* Quote */}
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 mb-4">
              <p className="text-center text-lg font-semibold text-white">
                "Tiếng Anh còn làm được, còn gì mình không làm được?"
              </p>
            </div>

            {/* Note */}
            <p className="text-white/70 text-sm text-center italic">
              Tự tin này sẽ lan sang Toán, Lý, Hóa... và cả cuộc sống.
            </p>
          </motion.div>
        </motion.div>

        {/* Social Proof Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
            <span className="text-2xl">👨‍👩‍👧</span>
            <p className="text-gray-600">
              <strong className="text-[var(--coral-burst)]">2,000+</strong> phụ huynh đã thấy con thay đổi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TransformationSection
