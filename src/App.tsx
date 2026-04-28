/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Globe, 
  Zap, 
  Bot, 
  BarChart3, 
  MessageSquare, 
  ArrowRight, 
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Shield,
  Layers,
  Activity,
  Terminal,
  Search,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef, ReactNode } from "react";

interface HUDElementProps {
  className?: string;
  children: ReactNode;
  key?: string | number;
}

const HUDElement = ({ className, children }: HUDElementProps) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/50" />
    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary/50" />
    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary/50" />
    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary/50" />
    {children}
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass border-white/5 rounded-2xl px-6 h-16 flex justify-between items-center transition-all ${isScrolled ? 'mx-0' : 'mx-4'}`}>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all" />
              <div className="relative w-10 h-10 bg-slate-950 border border-primary/50 rounded-lg flex items-center justify-center glow-border overflow-hidden">
                <img
                  src="/logo.png"
                  alt="給樂數位 Logo"
                  className="w-8 h-8 object-contain relative z-10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-heading font-bold tracking-widest leading-none">
                給樂數位
              </span>
              <span className="text-[10px] text-primary/60 font-mono tracking-widest uppercase">GATHER Digital</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-primary/40">01.</span> 核心技術
            </a>
            <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-primary/40">02.</span> 服務項目
            </a>
            <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
              <span className="text-primary/40">03.</span> 聯絡我們
            </a>
            <Button variant="outline" className="cyber-button border-primary/50 text-primary hover:bg-primary/10 h-9 text-[10px] px-6">
              SYSTEM_INIT
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg z-0" />
      
      {/* Animated Background Orbs */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HUDElement className="inline-block mb-6 px-4 py-1 bg-primary/5 border border-primary/20 rounded-sm">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-primary uppercase">
                <Activity className="w-3 h-3 animate-pulse" />
                Neural Network Active
              </div>
            </HUDElement>
            
            <h1 className="text-6xl md:text-9xl font-heading font-bold mb-8 leading-[0.9] tracking-tighter">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  AI AGENT
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-primary via-blue-500 to-secondary glow-text"
                >
                  AUTONOMY
                </motion.span>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm md:text-base font-mono text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed tracking-wider uppercase"
            >
              [ 重新定義網站營運 ] <br />
              由 AI Agent 自動化驅動的未來科技官網。給樂數位為您打造自主運行的數位資產。
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button size="lg" className="cyber-button bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-14 text-xs font-mono tracking-widest glow-border">
                INITIALIZE_PROJECT
              </Button>
              <Button size="lg" variant="outline" className="cyber-button px-10 h-14 text-xs font-mono tracking-widest border-white/10 hover:bg-white/5">
                VIEW_ARCHIVE
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating HUD Elements */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-10 glass p-4 rounded-lg border-primary/20 w-48"
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-3 h-3 text-primary" />
              <span className="text-[8px] font-mono text-primary uppercase">Console Output</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 bg-primary/20 rounded-full w-full" />
              <div className="h-1 bg-primary/20 rounded-full w-3/4" />
              <div className="h-1 bg-primary/20 rounded-full w-5/6" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -right-10 glass p-4 rounded-lg border-primary/20 w-56"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[8px] font-mono text-primary uppercase">Data Stream</span>
              <Activity className="w-3 h-3 text-primary" />
            </div>
            <div className="flex items-end gap-1 h-8">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [`${h}%`, `${Math.min(100, h + 20)}%`, `${h}%`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="flex-1 bg-primary/40 rounded-t-sm" 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-mono text-primary/40 uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AGENT_CORE",
      tag: "Autonomous",
      description: "內置專屬 AI Agent，自動監控市場趨勢並即時更新網站內容與策略。"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "HYPER_SPEED",
      tag: "Performance",
      description: "基於最新 Web 技術架構，確保網站在全球範圍內都能秒速加載。"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SECURE_NODE",
      tag: "Protection",
      description: "企業級安全防護，AI 自動識別並攔截潛在威脅，確保數據安全無虞。"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "MULTI_STACK",
      tag: "Scalability",
      description: "模組化架構設計，隨時擴展 AI 功能，滿足企業不同階段的成長需求。"
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary font-mono tracking-widest uppercase">
              System Capabilities
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tighter">
              核心技術 <span className="text-primary">架構</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest max-w-xs">
            // 結合 AI 深度學習與現代 Web 開發 <br />
            // 重新定義企業官網運作邏輯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="cyber-card glass p-8 h-full border-white/5 group-hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-primary group-hover:glow-text transition-all">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-mono text-primary/40">{feature.tag}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono tracking-tighter">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-primary/40 rounded-full" />
                    <div className="w-1 h-1 bg-primary/40 rounded-full" />
                    <div className="w-1 h-1 bg-primary/40 rounded-full" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative glass rounded-3xl p-1 border-white/10 aspect-square max-w-md mx-auto">
                <div className="w-full h-full bg-slate-950 rounded-[22px] overflow-hidden relative">
                  {/* AI Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ 
                            rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="absolute inset-0 border border-primary/30 rounded-full"
                          style={{ margin: i * 20 }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bot className="w-16 h-16 text-primary glow-text" />
                      </div>
                    </div>
                  </div>
                  {/* HUD Overlays */}
                  <div className="absolute top-4 left-4 font-mono text-[8px] text-primary/60 space-y-1">
                    <div>SCANNING_ENVIRONMENT...</div>
                    <div>NEURAL_LINK_ESTABLISHED</div>
                    <div className="text-green-500">OPTIMIZING_CONVERSION_PATH</div>
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-[8px] text-primary/60">
                    LATENCY: 12ms <br />
                    UPTIME: 99.99%
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary font-mono tracking-widest uppercase">
              Evolution Path
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-none tracking-tighter">
              從 WordPress 專家 <br />
              到 <span className="text-primary">AI 網站先行者</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              我們在 WordPress 領域深耕多年，深知傳統網站營運的痛點。
              現在，我們將 AI Agent 技術融入網站核心，為您提供一站式的自動化數位轉型方案。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "AI_CMS", desc: "自動化內容管理" },
                { title: "SMART_SEO", desc: "智能搜尋優化" },
                { title: "AGENT_CS", desc: "企業級 AI 客服" },
                { title: "CONV_AI", desc: "高轉化導購設計" }
              ].map((item, i) => (
                <HUDElement key={i} className="p-4 glass border-white/5 hover:border-primary/30 transition-all group">
                  <div className="text-[10px] font-mono text-primary mb-1 tracking-tighter">{item.title}</div>
                  <div className="text-sm font-bold group-hover:text-primary transition-colors">{item.desc}</div>
                </HUDElement>
              ))}
            </div>
            
            <Button className="mt-12 cyber-button bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-14 text-xs font-mono tracking-widest glow-border">
              EXPLORE_SERVICES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative">
          {/* Animated Background Glow */}
          <motion.div 
            animate={{ 
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-blue-600/40 to-secondary/40 rounded-[4rem] blur-[80px]" 
          />
          
          <div className="relative glass rounded-3xl p-12 md:p-20 border-white/10 overflow-hidden text-center">
            {/* Animated Scanning Beam */}
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" 
            />
            
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
              準備好迎接 <br />
              <span className="text-primary">AI 時代了嗎？</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto font-mono uppercase tracking-widest text-xs">
              // 聯繫給樂數位，讓我們為您的品牌打造一個 <br />
              // 會自主思考、自主營運的未來官網。
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="https://lin.ee/xxvdvb4" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="cyber-button bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-16 text-xs font-mono tracking-widest glow-border w-full md:w-auto">
                  INITIATE_CONTACT
                </Button>
              </a>
              <a href="https://lin.ee/xxvdvb4" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="cyber-button px-12 h-16 text-xs font-mono tracking-widest border-white/10 hover:bg-white/5 w-full md:w-auto">
                  REQUEST_QUOTATION
                </Button>
              </a>
            </div>
            
            {/* Decorative HUD lines */}
            <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center opacity-20">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-4 bg-primary" />)}
              </div>
              <div className="text-[8px] font-mono text-primary uppercase tracking-[0.5em]">Gather Digital Intelligence System v2.0</div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-4 bg-primary" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-950 border border-primary/50 rounded-lg flex items-center justify-center glow-border">
                <img
                  src="/logo.png"
                  alt="給樂數位 Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xl font-heading font-bold tracking-widest leading-none">
                  給樂數位
                </span>
                <span className="text-[10px] text-primary/60 font-mono tracking-widest uppercase">GATHER Digital</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 font-mono text-xs uppercase tracking-wider leading-relaxed">
              致力於將最前沿的 AI 技術注入企業官網，賦予網站智慧靈魂，轉化為能主動創造價值、持續進化的數位核心戰力。
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> 首頁</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> 核心技術</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> 服務項目</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-8">Contact_Info</h4>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> gathertaiwan@gmail.com</li>
              <li className="flex items-center gap-3"><Globe className="w-4 h-4 text-primary" /> gathertaiwan.com</li>
              <li className="flex items-center gap-3"><Terminal className="w-4 h-4 text-primary" /> Taipei, Taiwan</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex justify-center items-center text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <p>© 2026 給樂數位 Gather Digital All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <div className="noise" />
      <div className="scanline" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
