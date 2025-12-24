import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Clock, Sparkles } from 'lucide-react'

const SolutionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-5xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            SELA KHÔNG DẠY TIẾNG ANH.
            <br />
            <span className="gradient-text">SELA CHO NÃO CON "XEM PHIM".</span>
          </h2>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-gray-600 mb-12"
        >
          Phương pháp <strong className="text-purple-600">AI Video Toàn Não</strong> - Con tưởng đang giải trí, nhưng não đang... học.
        </motion.p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Vocabulary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
                <span className="text-4xl">🎬</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Từ Vựng</h3>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">1 phút = 1 từ vựng</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-base md:text-lg mb-4">
                <strong>Không chép. Không đọc như vẹt.</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Con xem video có hình ảnh sống động, âm thanh cuốn hút, câu chuyện thú vị. Từ vựng tự "dán" vào não, bật ra thành phản xạ.
              </p>
              <div className="bg-orange-50 rounded-lg p-4 text-sm md:text-base text-gray-700 italic">
                <Sparkles className="w-4 h-4 inline-block text-orange-500 mr-2" />
                Giống như con nhớ tên nhân vật phim mà chẳng cần ai bắt học vậy.
              </div>
            </div>
          </motion.div>

          {/* Grammar Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-400 to-teal-400 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Ngữ Pháp</h3>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">2 phút = 1 cấu trúc</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-base md:text-lg mb-4">
                <strong>Không công thức. Không bài tập khô khan.</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Con xem, con hiểu, con dùng đúng - mà không cần biết "đây là thì gì".
              </p>
              <div className="bg-green-50 rounded-lg p-4 text-sm md:text-base text-gray-700 italic">
                <Sparkles className="w-4 h-4 inline-block text-green-500 mr-2" />
                Giống như con nói tiếng Việt chuẩn mà có bao giờ học "chủ ngữ + vị ngữ" đâu?
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
