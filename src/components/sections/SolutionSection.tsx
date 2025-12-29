import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SolutionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const solutions = [
    {
      icon: '🎬',
      badge: '1 phút',
      title: 'Video Từ Vựng',
      emphasis: 'Không chép. Không đọc như vẹt.',
      description:
        'Con xem video có hình ảnh sống động, âm thanh cuốn hút, câu chuyện thú vị. Từ vựng tự "dán" vào não, bật ra thành phản xạ.',
      metaphor:
        'Giống như con nhớ tên nhân vật phim mà chẳng cần ai bắt học vậy.',
      bgAccent: 'from-[var(--sunset-orange)] to-[var(--coral-burst)]',
      youtubeId: '', // Thêm YouTube video ID ở đây, ví dụ: 'dQw4w9WgXcQ'
    },
    {
      icon: '🎯',
      badge: '2 phút',
      title: 'Video Ngữ Pháp',
      emphasis: 'Không công thức. Không bài tập khô khan.',
      description:
        'Con xem, con hiểu, con dùng đúng - mà không cần biết "đây là thì gì".',
      metaphor:
        'Giống như con nói tiếng Việt chuẩn mà có bao giờ học "chủ ngữ + vị ngữ" đâu?',
      bgAccent: 'from-[var(--fresh-mint)] to-[var(--sky-trust)]',
      youtubeId: '', // Thêm YouTube video ID ở đây, ví dụ: 'dQw4w9WgXcQ'
    },
  ]

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-mesh relative overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="blob blob-orange w-72 h-72 top-20 -left-20 opacity-30" />
      <div className="blob blob-blue w-96 h-96 -bottom-32 right-0 opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[var(--charcoal)] leading-tight mb-4">
            Con bạn không ghét học tiếng Anh.
            <br />
            <span className="gradient-text">Chỉ là ghét cái cảm giác. Học mãi không vào, làm mãi không được.</span>
          </h2>
        </motion.div>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <p>
            <strong className="text-[var(--coral-burst)]">SELA ENGLISH</strong>{' '}
            giúp con yêu tiếng Anh lại từ đầu với cảm giác{' '}
            <strong className="text-[var(--charcoal)]">CON LÀM ĐƯỢC, CON NHỚ ĐƯỢC</strong>{' '}
            qua các video AI từ vựng & ngữ pháp học toàn não thuận tự nhiên.
          </p>
          <p className="mt-2">
            Con tưởng đang giải trí, nhưng chữ lại tự chui vào não con một cách tự động.
          </p>
        </motion.div>

        {/* Two-Column Solution Grid with Glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-14">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Top accent bar */}
              <div
                className={`h-1 bg-gradient-to-r ${solution.bgAccent}`}
              />

              <div className="p-6 md:p-8">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-cream flex items-center justify-center text-3xl">
                    {solution.icon}
                  </div>
                  <span className="px-3 py-1 bg-[var(--coral-burst)] text-white text-sm font-semibold rounded-full">
                    {solution.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[var(--charcoal)] mb-3">
                  {solution.title}
                </h3>

                {/* Emphasis */}
                <p className="text-base md:text-lg font-semibold text-[var(--charcoal)] mb-3">
                  {solution.emphasis}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Metaphor box */}
                <div className="bg-cream/70 rounded-xl p-4 border-l-4 border-[var(--coral-burst)]">
                  <p className="text-sm md:text-base text-gray-700 italic">
                    ✨ {solution.metaphor}
                  </p>
                </div>

                {/* Video Embed */}
                <div className="mt-6 aspect-video rounded-xl overflow-hidden">
                  {solution.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${solution.youtubeId}`}
                      title={solution.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <span className="text-3xl mb-2 block">▶️</span>
                        <p className="text-sm">Video preview</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Video Method Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass rounded-2xl p-6 md:p-8 border-l-4 border-[var(--coral-burst)] shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className="text-4xl md:text-5xl flex-shrink-0">🧬</div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--charcoal)] mb-3">
                AI Video Toàn Não
              </h3>
              <p className="text-gray-700 leading-relaxed md:text-lg">
                Công nghệ AI kết hợp với khoa học não bộ, tạo ra video học tập{' '}
                <strong className="text-[var(--coral-burst)]">"gây nghiện"</strong>{' '}
                - con tưởng đang giải trí, não đang... lưu trữ.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
