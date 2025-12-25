import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Phone, User, GraduationCap, MapPin } from 'lucide-react'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    location: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section ref={ref} id="form-dang-ky" className="section-padding bg-cream relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--sunset-orange)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--sky-trust)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--coral-burst)] rounded-full opacity-5 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[clamp(24px,5vw,48px)] font-bold text-[var(--charcoal)] leading-tight mb-4">
            ĐỪNG ĐỂ TIỀN ĐẦU TƯ CHO CON...
            <br />
            <span className="gradient-text p-2 ">TRỞ THÀNH "MUỐI BỎ BIỂN"</span> 🌊
          </h2>
        </motion.div>

        {/* Viral Comparison Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:mb-14"
        >
          {/* Bad Investment Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl overflow-hidden border-2 border-gray-200/50"
          >
            {/* Header bar */}
            <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-400" />

            <div className="p-6 md:p-8">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl">
                  💸
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-700">Đầu tư cho con mấy triệu</p>
                  <p className="text-sm text-gray-500">Trung tâm, gia sư, app...</p>
                </div>
              </div>

              {/* Method */}
              <p className="text-gray-600 mb-5 leading-relaxed">
                Với phương pháp <span className="text-gray-800 font-medium">chép phạt, học thuộc, làm bài tập đến mụ mị...</span>
              </p>

              {/* Result Box */}
              <div className="bg-gray-100 rounded-xl p-5 text-center border border-gray-200">
                <p className="text-3xl md:text-4xl font-extrabold text-gray-400 mb-2">
                  → NHƯ MUỐI BỎ BIỂN 🌊
                </p>
                <p className="text-sm text-gray-500">
                  Tốn tiền, tốn thời gian, con vẫn sợ tiếng Anh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Good Investment Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[var(--coral-burst)] to-[var(--energy-red)] rounded-2xl overflow-hidden shadow-xl relative"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

            {/* Header bar */}
            <div className="h-2 bg-gradient-to-r from-yellow-300 to-yellow-400" />

            <div className="p-6 md:p-8 relative">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
                  ✨
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Đầu tư 1 triệu vào SELA</p>
                  <p className="text-sm text-white/80">AI Video Toàn Não</p>
                </div>
              </div>

              {/* Method */}
              <p className="text-white/90 mb-5 leading-relaxed">
                Con <span className="text-white font-semibold">tưởng đang giải trí</span>, nhưng não thì đang học.
              </p>

              {/* Result Box */}
              <div className="bg-white/20 rounded-xl p-5 text-center backdrop-blur-sm border border-white/30">
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  → THÌ NGON LUÔN 🎉
                </p>
                <p className="text-sm text-white/90">
                  Con tự tin, con thích học, ba mẹ nhẹ đầu
                </p>
              </div>

              {/* Decorative sparkles */}
              <div className="absolute top-4 right-4 text-2xl animate-float">⭐</div>
              <div className="absolute bottom-4 right-8 text-xl animate-float-subtle">✨</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Emotional Close */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Tuổi thơ con có bao nhiêu năm đâu. ⏰
          </p>
          <p className="text-gray-600 mb-4">
            Đừng để con lớn lên với ký ức: <em className="text-gray-500">"Hồi đó mình sợ tiếng Anh lắm..."</em>
          </p>
          <p className="text-xl md:text-2xl font-bold text-[var(--charcoal)]">
            Hãy để con lớn lên với niềm tin: <span className="gradient-text">"Mình làm được!"</span> 💪
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--coral-burst)] via-[var(--sunset-orange)] to-[var(--coral-burst)]" />

          {/* Form Header */}
          <div className="text-center mb-8">
            <span className="text-4xl mb-3 block">🎁</span>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--charcoal)] mb-2">
              CHO CON TRẢI NGHIỆM "NGON LUÔN"
            </h3>
            <p className="text-gray-500">Đăng ký học thử MIỄN PHÍ ngay!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--cream)] rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-[var(--coral-burst)]" />
                </div>
                <input
                  type="text"
                  placeholder="Họ tên phụ huynh *"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full pl-16 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[var(--coral-burst)] focus:ring-4 focus:ring-[var(--coral-burst)]/10 outline-none transition-all bg-gray-50/50"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--cream)] rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[var(--coral-burst)]" />
                </div>
                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-16 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[var(--coral-burst)] focus:ring-4 focus:ring-[var(--coral-burst)]/10 outline-none transition-all bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--cream)] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[var(--coral-burst)]" />
                </div>
                <input
                  type="text"
                  placeholder="Tên con"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="w-full pl-16 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[var(--coral-burst)] focus:ring-4 focus:ring-[var(--coral-burst)]/10 outline-none transition-all bg-gray-50/50"
                />
              </div>
              <div className="relative">
                <select
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[var(--coral-burst)] focus:ring-4 focus:ring-[var(--coral-burst)]/10 outline-none transition-all appearance-none bg-gray-50/50"
                >
                  <option value="">Tuổi của con</option>
                  <option value="6-8">6 - 8 tuổi</option>
                  <option value="9-11">9 - 11 tuổi</option>
                  <option value="12-14">12 - 14 tuổi</option>
                  <option value="15+">15+ tuổi</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--cream)] rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[var(--coral-burst)]" />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ (Quận/Huyện, Tỉnh/Thành phố)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full pl-16 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[var(--coral-burst)] focus:ring-4 focus:ring-[var(--coral-burst)]/10 outline-none transition-all bg-gray-50/50"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-gradient text-white text-lg md:text-xl font-bold py-5 rounded-xl flex items-center justify-center gap-3 animate-pulse-cta"
            >
              <span>ĐĂNG KÝ HỌC THỬ MIỄN PHÍ</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>

          {/* Trust Elements */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-lg">🔒</span>
              <span>Bảo mật thông tin</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-[var(--fresh-mint)]">✓</span>
              <span>Không ưng? Không mất gì</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-lg">⭐</span>
              <span>Ưng? Con đổi đời</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          © 2024 SELA English. Phương pháp AI Video Toàn Não.
        </motion.p>
      </div>
    </section>
  )
}

export default CTASection
