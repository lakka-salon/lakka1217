import { useState, useEffect } from 'react';
import { Leaf, Clock, MapPin, Phone, Calendar, Car, Bike, Instagram, MessageCircle, Sparkles, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    // Only show the download button in AI Studio preview environment
    if (window.location.hostname.includes('run.app') || window.location.hostname.includes('localhost')) {
      setShowDownload(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#111312] text-zinc-300 font-serif selection:bg-emerald-900 selection:text-emerald-50">
      {/* Temporary Download Button (Conditional) */}
      {showDownload && (
        <div className="bg-emerald-600 text-white text-center py-4 px-4 relative z-50">
          <p className="mb-2">Vercelデプロイ用のZIPファイルはこちらからダウンロードできます（最新版）：</p>
          <a 
            href={`/source.zip?v=${Date.now()}`}
            download="lakka-salon-source.zip"
            className="inline-block bg-white text-emerald-900 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-emerald-50 transition-colors"
          >
            lakka-salon-source.zip をダウンロード
          </a>
          <p className="mt-2 text-xs text-emerald-100">※このボタンは実際の lakka-salon.com には表示されません</p>
        </div>
      )}

      {/* Header / Hero */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image.pollinations.ai/prompt/A%20relaxing%20private%20massage%20salon%20room.%20A%20woman%20lying%20face%20down%20on%20a%20massage%20bed%20covered%20with%20a%20brown%20waffle%20towel%2C%20receiving%20a%20back%20massage%20from%20a%20therapist.%20A%20large%20sheer%20brown%20curtain%20is%20draped%20on%20the%20left%20side.%20The%20room%20has%20warm%20dim%20lighting%20from%20candles.%20Several%20potted%20green%20plants%20like%20monstera%20and%20ferns%20are%20around%20the%20room.%20Cozy%2C%20healing%2C%20warm%20atmosphere%2C%20photorealistic.?width=1920&height=1080&nologo=true&seed=88" 
            alt="Relaxing massage salon room with candles and plants" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111312]/30 via-[#111312]/60 to-[#111312]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <p className="text-emerald-400/80 tracking-[0.3em] text-sm md:text-base mb-6">完全予約制プライベートサロン</p>
          <h1 className="text-5xl md:text-7xl text-amber-50/90 font-medium tracking-widest mb-6">
            Lakka.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 tracking-[0.2em]">〜ほぐし✾リラクゼーション〜</p>
        </motion.div>
      </header>

      {/* Concept */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl md:text-3xl text-emerald-400/70 mb-12 tracking-[0.2em] flex items-center justify-center gap-4">
            <Leaf className="w-5 h-5" />
            Concept
            <Leaf className="w-5 h-5" />
          </h2>
          <div className="space-y-8 text-lg md:text-xl leading-loose tracking-wider text-zinc-300">
            <p>駅近くの路面店にひっそりと佇む、<br className="md:hidden" />完全予約制のプライベート空間。</p>
            <p>ゆったりとしたサロン内は、<br className="md:hidden" />敢えて薄暗く。</p>
            <p>植物の緑と、キャンドルの優しい光に包まれて、<br className="md:hidden" />心からリラックスできる時間をご提供いたします。</p>
            <div className="pt-10 mt-10 border-t border-zinc-800/50 space-y-8">
              <p className="text-amber-100/90 tracking-[0.15em]">"心と身体を軽くリセットして、<br className="md:hidden" />日常をもっと美しく豊かに。。。”</p>
              <p>あなたの素敵な笑顔をサポートするための隠れ家として<br className="md:hidden" />ご利用頂ければ嬉しいです。</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Menu */}
      <section className="py-24 bg-[#161918] px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-2xl md:text-3xl text-emerald-400/70 mb-20 tracking-[0.2em] text-center">Menu</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Standard Menu */}
            <motion.div {...fadeIn} className="space-y-10">
              <h3 className="text-xl text-amber-100/80 border-b border-zinc-800 pb-4 tracking-widest">Standard Menu</h3>
              
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-lg text-zinc-100 mb-2 tracking-wider group-hover:text-emerald-400 transition-colors flex flex-col sm:flex-row sm:items-baseline gap-2">
                    至福の全身もみほぐし
                    <span className="text-sm text-emerald-400/80 tracking-widest">60分 ￥5,000〜</span>
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed tracking-wide">まずはしっかりほぐしたい方に。。。</p>
                </div>
                <div className="group">
                  <h4 className="text-lg text-zinc-100 mb-2 tracking-wider group-hover:text-emerald-400 transition-colors flex flex-col sm:flex-row sm:items-baseline gap-2">
                    リフレクソロジー
                    <span className="text-sm text-emerald-400/80 tracking-widest">30分 ￥3,500〜</span>
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed tracking-wide">足裏から全身を整えるリラックスケア</p>
                </div>
                <div className="group">
                  <h4 className="text-[15px] sm:text-lg text-zinc-100 mb-2 tracking-wider group-hover:text-emerald-400 transition-colors flex flex-wrap sm:flex-nowrap items-baseline gap-x-2 gap-y-1">
                    <span className="whitespace-nowrap">至福の全身もみほぐし＆リフレクソロジー</span>
                    <span className="text-sm text-emerald-400/80 tracking-widest whitespace-nowrap">90分 ￥8,000〜</span>
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed tracking-wide">全身＋足裏でしっかり整える満足コース</p>
                </div>
                <div className="group">
                  <h4 className="text-[15px] sm:text-lg text-zinc-100 mb-2 tracking-wider group-hover:text-emerald-400 transition-colors flex flex-wrap sm:flex-nowrap items-baseline gap-x-2 gap-y-1">
                    <span className="whitespace-nowrap">特別コース　至福のフルカスタムコース</span>
                    <span className="text-sm text-emerald-400/80 tracking-widest whitespace-nowrap">150分 ￥12,500</span>
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed tracking-wide">全身＋足裏＋ヘッド＋ハンドを自由に組み合わせる特別コース</p>
                </div>
                <div className="group">
                  <h4 className="text-lg text-zinc-100 mb-2 tracking-wider group-hover:text-emerald-400 transition-colors flex flex-col sm:flex-row sm:items-baseline gap-2">
                    短時間リフレッシュ
                    <span className="text-sm text-emerald-400/80 tracking-widest">30分 ￥3,000</span>
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed tracking-wide">お時間がない時でも、辛い箇所ピンポイントケアでスッキリ、リフレッシュ</p>
                </div>
              </div>

              <h3 className="text-xl text-amber-100/80 border-b border-zinc-800 pb-4 pt-8 tracking-widest">Option Menu</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
                  <span className="text-zinc-200 tracking-wider flex-1">ドライヘッドスパ (炭酸泡使用)</span>
                  <span className="text-sm text-emerald-400/80 tracking-widest">10分 ￥1,000〜</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>
                  <span className="text-zinc-200 tracking-wider flex-1">ハンドリフレ (クリーム使用)</span>
                  <span className="text-sm text-emerald-400/80 tracking-widest">10分 ￥1,000〜</span>
                </div>
              </div>
            </motion.div>

            {/* New Menu */}
            <motion.div {...fadeIn} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="p-8 md:p-10 rounded-2xl border border-zinc-800/50 relative overflow-hidden shadow-2xl shadow-black/20 group">
              {/* Background Image (Generated via Pollinations AI to match the exact request) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://image.pollinations.ai/prompt/A%20beautiful%20sunset%20over%20a%20vast%20lavender%20field.%20In%20the%20foreground%2C%20on%20a%20rustic%20wooden%20table%2C%20there%20are%20several%20amber%20essential%20oil%20bottles%20with%20dropper%20tops%2C%20surrounded%20by%20fresh%20pink%20roses%2C%20scattered%20pink%20petals%2C%20and%20cut%20lavender%20sprigs.%20High%20quality%2C%20photorealistic%2C%20relaxing%20spa%20atmosphere%2C%20warm%20golden%20hour%20lighting.?width=1200&height=1200&nologo=true&seed=42" 
                  alt="Lavender field at sunset with essential oils and roses in the foreground" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>

              <div className="relative z-10">
                <div className="absolute -top-10 -right-10 md:-top-12 md:-right-12 bg-emerald-900/90 text-emerald-100 text-[10px] px-12 py-3 pt-12 md:pt-14 rotate-45 tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-3 h-3" />
                  RECOMMEND
                </div>
                <h3 className="text-xl text-amber-100 border-b border-zinc-400/30 pb-4 mb-10 tracking-widest drop-shadow-md">Recommend Menu</h3>
                
                <div className="space-y-12">
                  <div className="bg-black/40 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="flex flex-col items-center mb-10 w-full relative">
                      <div className="absolute inset-0 bg-amber-500/10 blur-xl rounded-full" />
                      <div className="flex items-center justify-center w-full relative z-10 gap-2 sm:gap-4">
                        <div className="h-[1px] md:h-[2px] flex-1 bg-gradient-to-r from-transparent via-amber-300/40 to-amber-300/80 min-w-4 sm:min-w-8"></div>
                        <div className="flex items-center justify-center gap-1 sm:gap-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] shrink-0">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
                          <span className="text-amber-200 text-sm sm:text-lg md:text-xl tracking-widest font-medium text-center">深く休まる香りケア付き</span>
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-[pulse_2s_ease-in-out_infinite] shrink-0" />
                        </div>
                        <div className="h-[1px] md:h-[2px] flex-1 bg-gradient-to-l from-transparent via-amber-300/40 to-amber-300/80 min-w-4 sm:min-w-8"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl text-white mb-2 tracking-wider text-emerald-300 drop-shadow-md leading-relaxed flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-1">
                        <span className="whitespace-nowrap">至福の全身もみほぐし</span>
                        <span className="text-[12px] sm:text-sm text-zinc-200 tracking-widest whitespace-nowrap">(香りケア×ヘッド×ハンドの特別ケア込み)</span>
                      </h4>
                      <div className="mb-4">
                        <span className="text-base text-emerald-200/90 tracking-widest inline-block border-b border-emerald-400/30 pb-1 px-4">60分 ￥6,500〜</span>
                      </div>
                      <p className="text-sm text-zinc-100 leading-loose tracking-wide drop-shadow-md mb-8">
                        〜呼吸が深くなる、極上のリラックスへ
                      </p>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl border border-white/10 overflow-hidden">
                      <div className="p-6">
                        <p className="text-sm text-zinc-100 leading-loose tracking-wide">
                          100%天然香料『HE』を贅沢に配合したアロマフレグランス<br/>
                          <span className="text-amber-200 block my-2 text-base font-medium">”パルファン デュ モンド”</span> を使用。<br/>
                          人工的な香りでは味わうことができない深い癒やしを体感できます。<br/>
                          植物のチカラを借りて、より一層の癒やしと幸福感を心ゆくまでお楽しみください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info & Access */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl text-emerald-400/70 mb-20 tracking-[0.2em] text-center">Information</motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeIn} className="space-y-10">
            <div className="flex items-start gap-6">
              <MapPin className="w-6 h-6 text-amber-100/50 shrink-0 mt-1" />
              <div>
                <h4 className="text-zinc-100 mb-3 tracking-widest text-lg">Address</h4>
                <p className="text-zinc-400 text-base leading-loose tracking-wide">
                  〒252-0001<br />
                  神奈川県座間市相模が丘2-30-5<br />
                  グランドール相模1-C
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Phone className="w-6 h-6 text-amber-100/50 shrink-0 mt-1" />
              <div>
                <h4 className="text-zinc-100 mb-3 tracking-widest text-lg">Telephone</h4>
                <p className="text-zinc-400 text-base tracking-wider mb-2">080-2250-1217</p>
                <p className="text-sm text-zinc-500 leading-relaxed tracking-wide">
                  ショートメール頂ければ手が空き次第返信致します。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Clock className="w-6 h-6 text-amber-100/50 shrink-0 mt-1" />
              <div>
                <h4 className="text-zinc-100 mb-3 tracking-widest text-lg">Hours</h4>
                <p className="text-zinc-400 text-base leading-loose tracking-wide">
                  10:00 ~ 19:00<br />
                  <span className="text-sm text-zinc-500">最終受付 17:00</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Calendar className="w-6 h-6 text-amber-100/50 shrink-0 mt-1" />
              <div>
                <h4 className="text-zinc-100 mb-3 tracking-widest text-lg">Closed</h4>
                <p className="text-zinc-400 text-base tracking-wide">不定休</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <CreditCard className="w-6 h-6 text-amber-100/50 shrink-0 mt-1" />
              <div>
                <h4 className="text-zinc-100 mb-3 tracking-widest text-lg">Payment</h4>
                <p className="text-zinc-400 text-base tracking-wide">現金・カード・QR決済が利用可能</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="space-y-6">
            <div className="bg-[#161918] p-8 rounded-2xl border border-zinc-800/50">
              <h4 className="text-zinc-100 mb-4 flex items-center gap-3 tracking-wider">
                <Car className="w-5 h-5 text-emerald-400/60" />
                駐車場について
              </h4>
              <p className="text-zinc-400 text-sm leading-loose tracking-wide">
                店舗裏にございます。<br />
                マンション1階部分 No.4（入ってすぐ右手前）をご利用ください。
              </p>
            </div>

            <div className="bg-[#161918] p-8 rounded-2xl border border-zinc-800/50">
              <h4 className="text-zinc-100 mb-4 flex items-center gap-3 tracking-wider">
                <Bike className="w-5 h-5 text-emerald-400/60" />
                駐輪場について
              </h4>
              <p className="text-zinc-400 text-sm leading-loose tracking-wide">
                自転車は店舗前に置くスペースがございます。
              </p>
            </div>

            <div className="bg-[#161918] p-8 rounded-2xl border border-zinc-800/50">
              <p className="text-zinc-400 text-sm leading-loose tracking-wide">
                ※お着替えの準備もございますので、お気軽にお越しください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation & Footer */}
      <footer className="bg-[#0a0c0b] py-24 border-t border-zinc-900/50">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl text-emerald-400/70 mb-8 tracking-[0.2em]">Reservation</h2>
          <p className="text-zinc-400 text-sm mb-16 leading-loose tracking-wide">
            ご予約はLINEより承っております。<br />
            最新情報はInstagramをご覧ください。
          </p>
          
          <div className="flex flex-col sm:flex-row items-start justify-center gap-8 mb-24">
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <a href="https://line.me/R/ti/p/@238xmyfq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white px-10 py-5 rounded-full transition-all duration-300 w-full justify-center shadow-lg shadow-[#06C755]/20 hover:shadow-[#06C755]/40 hover:-translate-y-1">
                <MessageCircle className="w-6 h-6" />
                <span className="tracking-widest font-medium">LINEで予約する</span>
              </a>
              <span className="text-zinc-500 text-sm tracking-wider">ID: @238xmyfq</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <a href="https://www.instagram.com/lakka.relaxation/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:opacity-90 text-white px-10 py-5 rounded-full transition-all duration-300 w-full justify-center shadow-lg shadow-[#d6249f]/20 hover:shadow-[#d6249f]/40 hover:-translate-y-1">
                <Instagram className="w-6 h-6" />
                <span className="tracking-widest font-medium">Instagramを見る</span>
              </a>
              <span className="text-zinc-500 text-sm tracking-wider">@lakka.relaxation</span>
            </div>
          </div>

          <p className="text-zinc-600 text-xs tracking-widest">
            &copy; {new Date().getFullYear()} Lakka. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
