import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check, Lightbulb } from 'lucide-react'

const ObjectionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const failedInvestments = [
    { name: 'Trung tâm A', price: '5 triệu/tháng' },
    { name: 'Gia sư B', price: '500k/buổi' },
    { name: 'App C', price: '2 triệu/năm' },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            "ĐẦU TƯ BAO NHIÊU TIỀN RỒI
            <br />
            <span className="gradient-text">MÀ CON VẪN SỢ TIẾNG ANH?"</span>
          </h2>
        </motion.div>

        {/* Failed investments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <p className="text-center text-lg md:text-xl text-gray-700 mb-6">
            Ba mẹ không sai. Ba mẹ đã cố gắng hết sức:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {failedInvestments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border border-gray-200"
              >
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gray-800 text-white rounded-2xl p-6 md:p-8 text-center mb-10"
        >
          <p className="text-lg md:text-xl mb-4">
            <strong>Nhưng con vẫn sợ. Vẫn ghét. Vẫn "không có khiếu".</strong>
          </p>
          <p className="text-gray-300">
            Vấn đề không phải thiếu tiền hay thiếu cố gắng. Vấn đề là{' '}
            <span className="text-orange-400 font-semibold">
              phương pháp không match với não bộ của con
            </span>.
          </p>
        </motion.div>

        {/* Visual metaphor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="text-center">
              <span className="text-5xl md:text-7xl">🚲</span>
              <p className="text-sm text-gray-500 mt-2">Phương pháp cũ</p>
            </div>
            <span className="text-3xl text-gray-400">≠</span>
            <div className="text-center">
              <span className="text-5xl md:text-7xl">🏎️</span>
              <p className="text-sm text-gray-500 mt-2">Kỳ vọng của bạn</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 italic">
            "Muốn con lái siêu xe vươn ra biển lớn, nhưng cho con đi học... lái xe đạp."
          </p>
        </motion.div>

        {/* Solution box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 md:p-10 text-white"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">SELA khác ở chỗ:</h3>
              <p className="text-white/90">
                Chúng tôi không "nhồi" kiến thức vào đầu con.
                <br />
                Chúng tôi <strong>"bật công tắc"</strong> niềm tin trong con.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Khi con tin mình làm được → Con sẽ làm được thật',
              'Không cần ép buộc, con tự muốn học',
              'Đơn giản vậy thôi. Nhưng không phải ai cũng biết cách.',
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-white/95">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ObjectionSection
