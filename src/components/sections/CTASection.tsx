import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, CheckCircle, Phone, User, GraduationCap, MapPin } from 'lucide-react'

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
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.')
  }

  return (
    <section ref={ref} id="form-dang-ky" className="section-padding bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ĐỪNG ĐỂ TIỀN ĐẦU TƯ CHO CON...
            <br />
            <span className="gradient-text">TRỞ THÀNH "MUỐI BỎ BỂ"</span>
          </h2>
        </motion.div>

        {/* Viral comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Bad investment */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💸</span>
              <span className="text-lg font-bold text-gray-700">Đầu tư cho con mấy triệu</span>
            </div>
            <p className="text-gray-600 mb-4">
              Với phương pháp chép phạt, học thuộc, làm bài tập đến mụ mị...
            </p>
            <div className="bg-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gray-500">
                → NHƯ MUỐI BỎ BỂ 🌊
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Tốn tiền, tốn thời gian, con vẫn sợ tiếng Anh
              </p>
            </div>
          </div>

          {/* Good investment */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 md:p-8 text-white shadow-xl animate-pulse-cta">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✨</span>
              <span className="text-lg font-bold">Đầu tư 1 triệu vào SELA English</span>
            </div>
            <p className="text-white/90 mb-4">
              Với phương pháp AI Video Toàn Não...
            </p>
            <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold">
                → NGON LUÔN 🎉
              </p>
              <p className="text-sm text-white/80 mt-2">
                Con tự tin, con thích học, ba mẹ nhẹ đầu
              </p>
            </div>
          </div>
        </motion.div>

        {/* Emotional close */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Tuổi thơ con có bao nhiêu năm đâu.
          </p>
          <p className="text-gray-600 mb-4">
            Đừng để con lớn lên với ký ức: <em>"Hồi đó mình sợ tiếng Anh lắm..."</em>
          </p>
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            Hãy để con lớn lên với niềm tin: <span className="gradient-text">"Mình làm được!"</span>
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              👉 CHO CON TRẢI NGHIỆM "NGON LUÔN"
            </h3>
            <p className="text-gray-500">Đăng ký học thử MIỄN PHÍ ngay!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Họ tên phụ huynh"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tên con"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  required
                />
              </div>
              <div className="relative">
                <select
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none bg-white"
                  required
                >
                  <option value="">Tuổi của con</option>
                  <option value="5-7">5 - 7 tuổi</option>
                  <option value="8-10">8 - 10 tuổi</option>
                  <option value="11-13">11 - 13 tuổi</option>
                  <option value="14-16">14 - 16 tuổi</option>
                  <option value="17+">17+ tuổi</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Địa chỉ (Quận/Huyện, Tỉnh/Thành phố)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg md:text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>ĐĂNG KÝ HỌC THỬ MIỄN PHÍ</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Trust elements */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Không ưng? Không mất gì</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Ưng? Con đổi đời</span>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          © 2024 SELA English. Phương pháp AI Video Toàn Não.
        </motion.p>
      </div>
    </section>
  )
}

export default CTASection
