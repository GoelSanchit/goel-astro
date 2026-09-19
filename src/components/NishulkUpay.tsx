"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Upay {
  emoji: string;
  text: string;
  shlok?: {
    lines: string[];
    source: string;
    bhavarth: string;
  };
}

const UPAY: Upay[] = [
  {
    emoji: "🌳",
    text: "यदि आप शनिवार को पीपल के पेड़ का स्पर्श करते हैं तथा वहाँ अपनी कोई इच्छा माँगते हैं, तो वह अवश्य पूरी होगी।",
    shlok: {
      lines: [
        "अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः।",
        "गन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः॥",
      ],
      source: "श्रीमद्भगवद्गीता, अध्याय १०, श्लोक २६",
      bhavarth:
        "भगवान श्रीकृष्ण कहते हैं — समस्त वृक्षों में मैं पीपल (अश्वत्थ) का वृक्ष हूँ, देवर्षियों में नारद, गंधर्वों में चित्ररथ और सिद्धों में कपिल मुनि हूँ। अर्थात् पीपल का वृक्ष स्वयं भगवान का स्वरूप है, इसीलिए इसका स्पर्श और पूजन अत्यंत फलदायी है।",
    },
  },
  {
    emoji: "🌙",
    text: "यदि आप अपनी माता के तलवों तथा पैरों की पिंडलियों पर तेल की मालिश करते हैं, तो आपका चंद्रमा (अर्थात् मन) उच्च का फल देगा।",
  },
  {
    emoji: "☀️",
    text: "यदि आप अपने पिता का आदर व सम्मान करते हैं, तो आपका सूर्य (आत्मा) मज़बूत होगा।",
  },
  {
    emoji: "🐦",
    text: "यदि आप पशु-पक्षियों, चींटियों आदि के लिए अनाज, पानी व भोजन की व्यवस्था करते हैं, तो आपके ग्रह अच्छे होंगे।",
  },
  {
    emoji: "🍛",
    text: "यदि आप सक्षम हैं, तो भंडारे में सहयोग करें — बिना सहयोग के भोजन न करें।",
  },
  {
    emoji: "🔱",
    text: "भगवान शंकर को जब भी संभव हो, जल चढ़ाएँ।",
  },
  {
    emoji: "🤝",
    text: "अपाहिज व कुष्ठ रोगियों की सहायता करें।",
  },
];

export default function NishulkUpay() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-5">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">निःशुल्क उपाय</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold gold-gradient-text mb-4">
            पहले यह करें
          </h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            यदि आप नीचे दिए गए कार्य करते हैं, तो आपको हमारी सेवाओं की आवश्यकता
            नहीं पड़ेगी।
          </p>
        </motion.div>

        <ol className="space-y-4">
          {UPAY.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-bg p-5 sm:p-6 flex items-start gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-xl">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-gold font-bold mr-2">{i + 1}.</span>
                <span className="text-white/85 text-base sm:text-lg leading-relaxed">
                  {item.text}
                </span>

                {item.shlok && (
                  <div className="mt-4 pt-4 border-t border-gold/15">
                    <blockquote className="text-center">
                      {item.shlok.lines.map((line) => (
                        <p
                          key={line}
                          className="text-gold-light font-[family-name:var(--font-heading)] text-base sm:text-lg leading-loose"
                        >
                          {line}
                        </p>
                      ))}
                      <cite className="block not-italic text-gold/70 text-xs sm:text-sm mt-2">
                        — {item.shlok.source}
                      </cite>
                    </blockquote>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-4">
                      <span className="text-gold font-semibold">भावार्थ: </span>
                      {item.shlok.bhavarth}
                    </p>
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-white/40 text-sm mt-10"
        >
          फिर भी यदि मार्गदर्शन की आवश्यकता हो, तो हमारी सेवाएँ नीचे देखें।
        </motion.p>
      </div>
    </section>
  );
}
