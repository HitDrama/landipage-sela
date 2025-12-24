import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PenLine, BookOpen, Brain } from 'lucide-react'

const InterestSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const painPoints = [
    { icon: PenLine, text: 'Chép phạt từ vựng 50 lần → Hôm sau quên sạch' },
    { icon: BookOpen, text: 'Học thuộc "I go, you go, he/she/it goes" → Vào bài vẫn sai' },
    { icon: Brain, text: 'Nghe cô giảng ngữ pháp → Não tự động chuyển sang chế độ "máy bay"' },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            HỌC TIẾNG ANH KIỂU CŨ:
            <br />
            <span className="gradient-text">CHÉP 100 LẦN, NHỚ ĐƯỢC... 0 LẦN</span> 📝
          </h2>
        </motion.div>

        {/* Pain points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-6 md:p-10 mb-10"
        >
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center font-medium">
            Hồi nhỏ, ai cũng từng:
          </p>
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-gray-700 text-base md:text-lg">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Result box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 md:p-8 text-white text-center mb-10"
        >
          <p className="text-lg md:text-xl font-semibold mb-2">Kết quả?</p>
          <p className="text-xl md:text-2xl font-bold">
            Con ghét tiếng Anh. Con sợ bị gọi lên bảng. Con nghĩ mình "không có khiếu".
          </p>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Nhưng sự thật là:
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            Không phải con không có khiếu.
            <br />
            <span className="gradient-text">Là phương pháp không có... não.</span> 🧠
          </p>
        </motion.div>

        {/* Highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">🧠</span>
            <div>
              <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Não bộ không học bằng cách "chép đi chép lại".
              </p>
              <p className="text-gray-700 text-base md:text-lg">
                Não học bằng <strong>hình ảnh, cảm xúc, và sự lặp lại TỰ NHIÊN</strong> - giống như cách con thuộc làu bài hát trên TikTok mà chẳng cần ai bắt học.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InterestSection
