import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Heart, Zap } from 'lucide-react'

const TransformationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const transformations = [
    {
      icon: Shield,
      emoji: '😰 → 😎',
      title: 'Từ SỢ sang TỰ TIN',
      before: 'Cô gọi tên → Tim đập loạn → Cúi mặt xuống bàn',
      after: 'Cô gọi tên → Đứng dậy → Trả lời rõ ràng → Cả lớp ngạc nhiên',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      emoji: '😫 → 🎮',
      title: 'Từ BỊ ÉP sang TỰ NGUYỆN',
      before: '"Con ơi học tiếng Anh đi!" → "Dạ..." → Lướt điện thoại',
      after: 'Con tự mở video học, ba mẹ phải nhắc: "Thôi nghỉ đi con!"',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Zap,
      emoji: '💡',
      title: 'Hiệu ứng DOMINO',
      before: 'Khi con chiến thắng "con quái vật" mang tên tiếng Anh, con sẽ nhận ra:',
      after: '"Tiếng Anh còn làm được, còn gì mình không làm được?"',
      note: 'Tự tin này sẽ lan sang Toán, Lý, Hóa... và cả cuộc sống.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
          className="text-center text-lg md:text-xl text-gray-600 mb-12"
        >
          Chỉ cần con tin <strong>"mình làm được"</strong>, mọi thứ sẽ khác.
        </motion.p>

        {/* Transformation cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className={`${item.bgColor} rounded-2xl p-6 relative overflow-hidden`}
            >
              {/* Emoji badge */}
              <div className="text-3xl md:text-4xl mb-4 text-center">{item.emoji}</div>

              {/* Title */}
              <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} text-center mb-6`}>
                {item.title}
              </h3>

              {/* Before */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">TRƯỚC:</p>
                <p className="text-gray-600 text-sm md:text-base bg-white/70 rounded-lg p-3">
                  {item.before}
                </p>
              </div>

              {/* After */}
              <div>
                <p className="text-sm font-semibold text-green-600 mb-2">SAU:</p>
                <p className="text-gray-800 text-sm md:text-base font-medium bg-white rounded-lg p-3 shadow-sm">
                  {item.after}
                </p>
              </div>

              {/* Note (for domino effect) */}
              {item.note && (
                <p className="mt-4 text-sm text-gray-600 italic text-center">
                  {item.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TransformationSection
