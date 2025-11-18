'use client'

import Image from 'next/image'
import { ArrowRight, TrendingUp, Shield, Zap, Clock, Target, BarChart3, Users, CheckCircle, Star, DollarSign, LineChart, Rocket, MessageCircle, Server, Code, HeadphonesIcon } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image 
                src="/x-breaker-logo.png" 
                alt="X-Breaker Pro Logo" 
                width={48} 
                height={48}
                priority
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold gradient-text">X-BREAKER PRO</h1>
                <p className="text-sm text-xbreaker-secondary font-semibold">BREAK THE LIMIT</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-xbreaker-primary transition">Fitur</a>
              <a href="#performance" className="text-gray-700 hover:text-xbreaker-primary transition">Performa</a>
              <a href="#services" className="text-gray-700 hover:text-xbreaker-primary transition">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-xbreaker-primary transition">Kontak</a>
            </div>
            <a href="#contact" className="btn-primary">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-xbreaker-light/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-xbreaker-primary/10 text-xbreaker-primary px-4 py-2 rounded-full text-sm font-semibold">
                🏆 Terbukti Profitable - Forward Test 2.5 Bulan
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Raih Profit <span className="gradient-text">5-30%</span> Per Bulan dengan AI Trading
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                X-Breaker Pro menggunakan <strong className="text-xbreaker-primary">strategi Martingale Breakout</strong> yang telah terbukti menghasilkan <strong>ROI 26.5% dalam 2.5 bulan</strong>. Trading otomatis 24/7 di 3 sesi market (Asia, Eropa, Amerika).
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-xbreaker-primary">
                  <div className="text-3xl font-bold text-xbreaker-primary">26.5%</div>
                  <div className="text-sm text-gray-600">ROI 2.5 Bulan</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-xbreaker-secondary">
                  <div className="text-3xl font-bold text-xbreaker-secondary">99.1%</div>
                  <div className="text-sm text-gray-600">Win Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi & Lihat Live Account</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#performance" className="btn-secondary flex items-center justify-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Lihat Performa</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary" />
                  <span>Money Back Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-xbreaker opacity-20 blur-3xl rounded-full"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">Real Performance</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">LIVE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Modal Awal</span>
                      <span className="font-bold text-gray-900">$2,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Equity Saat Ini</span>
                      <span className="font-bold text-xbreaker-primary text-xl">$2,530</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Profit</span>
                      <span className="font-bold text-green-600 text-xl">+$530</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Periode</span>
                      <span className="font-bold text-gray-900">2.5 Bulan</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="bg-gradient-xbreaker text-white rounded-lg p-4 text-center">
                      <div className="text-sm mb-1">Average Monthly Return</div>
                      <div className="text-3xl font-bold">10.6%</div>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    * Performa aktual forward test
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-xbreaker-primary mb-2">2</div>
              <div className="text-sm text-gray-600">Day Loss dalam 2.5 Bulan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-xbreaker-primary mb-2">225</div>
              <div className="text-sm text-gray-600">Total Trading Sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-xbreaker-primary mb-2">RR 1:4.5</div>
              <div className="text-sm text-gray-600">Risk/Reward Ratio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-xbreaker-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Automated Trading</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Mengapa X-Breaker Pro?</h2>
            <p className="section-subtitle">
              EA trading yang dirancang untuk memberikan profit konsisten dengan risk management ketat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group hover:border-xbreaker-primary border-2 border-transparent">
              <div className="w-16 h-16 bg-gradient-xbreaker rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Risk Management Ketat</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Max drawdown hanya <strong className="text-xbreaker-primary">25%</strong> dengan strategi martingale terkontrol. Max 20 position sebelum stop untuk melindungi modal Anda.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>RR Ratio 1:4.5 untuk profit maksimal</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Target $10 per sesi (0.5% dari modal)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Recovery dari day loss dalam 15 hari</span>
                </li>
              </ul>
            </div>

            <div className="card group hover:border-xbreaker-primary border-2 border-transparent">
              <div className="w-16 h-16 bg-gradient-xbreaker rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategi Terbukti Profitable</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-xbreaker-primary">Martingale Breakout Strategy</strong> dengan trading range fixed 13 pip. Trade di 3 sesi market untuk maksimalkan profit.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Win rate 99.1% per session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Trade NASDAQ (US100) high volatility</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Asia, Europe, America sessions</span>
                </li>
              </ul>
            </div>

            <div className="card group hover:border-xbreaker-primary border-2 border-transparent">
              <div className="w-16 h-16 bg-gradient-xbreaker rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fully Automated 24/7</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tidak perlu monitor chart sepanjang hari. EA bekerja otomatis menganalisa market dan execute trades untuk Anda.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Set & forget - EA handle semuanya</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Smart session detection & filtering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span>Auto skip NASDAQ holidays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Forward Test Performance</h2>
            <p className="section-subtitle">
              Data real dari akun live trading - bukan backtest atau simulasi
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-xbreaker-primary to-xbreaker-secondary rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">$2,000</div>
                  <div className="text-xbreaker-light">Modal Awal</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">$2,530</div>
                  <div className="text-xbreaker-light">Equity Sekarang</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-yellow-300">+26.5%</div>
                  <div className="text-xbreaker-light">ROI Total</div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Breakdown Per Bulan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-lg font-semibold mb-2">September 2024</div>
                    <div className="text-3xl font-bold mb-2">~10%</div>
                    <div className="text-sm text-xbreaker-light">1 day loss (Europe)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-lg font-semibold mb-2">Oktober 2024</div>
                    <div className="text-3xl font-bold mb-2">~8%</div>
                    <div className="text-sm text-xbreaker-light">1 day loss (America)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="text-lg font-semibold mb-2">November 2024</div>
                    <div className="text-3xl font-bold mb-2">~8.5%</div>
                    <div className="text-sm text-xbreaker-light">0 day loss (ongoing)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a href="#contact" className="inline-flex items-center space-x-2 bg-white text-xbreaker-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
                  <Eye className="w-5 h-5" />
                  <span>Lihat Akun Live dengan Password Investor</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-xbreaker-primary">
                <div className="text-3xl font-bold text-xbreaker-primary mb-2">2.5</div>
                <div className="text-sm text-gray-600">Bulan Forward Test</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
                <div className="text-3xl font-bold text-green-600 mb-2">99.1%</div>
                <div className="text-sm text-gray-600">Win Rate Session</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
                <div className="text-3xl font-bold text-blue-600 mb-2">$30</div>
                <div className="text-sm text-gray-600">Target Daily (3 sesi)</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-purple-500">
                <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                <div className="text-sm text-gray-600">Hari Recovery Day Loss</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-xbreaker">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ingin Melihat Bukti Real?</h3>
            <p className="text-xl mb-8 text-xbreaker-light">
              Kami berikan akses <strong>password investor</strong> untuk Anda pantau performa live account kami secara real-time
            </p>
            <a href="#contact" className="inline-flex items-center space-x-2 bg-white text-xbreaker-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              <span>Request Password Investor Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">
              Solusi lengkap untuk kebutuhan automated trading Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1: EA Hosting */}
            <div className="card group hover:border-xbreaker-primary border-2 border-transparent hover:transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-xbreaker rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">EA Hosting Service</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                VPS hosting dengan uptime 99.9% untuk EA Anda berjalan 24/7 tanpa gangguan
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Gunakan <strong>X-Breaker Pro EA</strong> atau EA sendiri</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">VPS optimized untuk MT4/MT5</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Low latency ke broker server</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">24/7 monitoring & support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Setup & konfigurasi gratis</span>
                </div>
              </div>

              <div className="bg-xbreaker-primary/5 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Mulai dari</div>
                  <div className="text-3xl font-bold text-xbreaker-primary">Rp 350K</div>
                  <div className="text-sm text-gray-600">/bulan</div>
                </div>
              </div>

              <a href="#contact" className="block w-full text-center bg-xbreaker-primary hover:bg-xbreaker-secondary text-white font-semibold py-3 rounded-lg transition">
                Tanya Detail
              </a>
            </div>

            {/* Service 2: Custom EA Development */}
            <div className="card group hover:border-xbreaker-primary border-2 border-transparent hover:transform hover:-translate-y-2 relative">
              <div className="absolute -top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                POPULER
              </div>
              <div className="w-20 h-20 bg-gradient-xbreaker rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Custom EA Development</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Kami develop EA sesuai strategi trading Anda dengan kualitas production-grade
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700"><strong>Konsultasi strategi</strong> mendalam</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Backtesting & optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Risk management terintegrasi</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Source code + dokumentasi lengkap</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Free update 3 bulan</span>
                </div>
              </div>

              <div className="bg-xbreaker-primary/5 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Mulai dari</div>
                  <div className="text-3xl font-bold text-xbreaker-primary">Rp 5 Jt</div>
                  <div className="text-sm text-gray-600">/project</div>
                </div>
              </div>

              <a href="#contact" className="block w-full text-center bg-xbreaker-primary hover:bg-xbreaker-secondary text-white font-semibold py-3 rounded-lg transition">
                Konsultasi Project
              </a>
            </div>

            {/* Service 3: Consultation */}
            <div className="card group hover:border-xbreaker-primary border-2 border-transparent hover:transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-xbreaker rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                <HeadphonesIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Konsultasi EA & Trading</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Expert guidance untuk optimasi EA, troubleshooting, dan strategi trading
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Review & audit EA existing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Optimization parameter EA</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Troubleshooting & debugging</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Money management advice</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-xbreaker-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Strategy development guidance</span>
                </div>
              </div>

              <div className="bg-xbreaker-primary/5 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Konsultasi pertama</div>
                  <div className="text-3xl font-bold text-xbreaker-primary">GRATIS</div>
                  <div className="text-sm text-gray-600">30 menit</div>
                </div>
              </div>

              <a href="#contact" className="block w-full text-center bg-xbreaker-primary hover:bg-xbreaker-secondary text-white font-semibold py-3 rounded-lg transition">
                Book Konsultasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Apa Kata Pengguna</h2>
            <p className="section-subtitle">
              Pengalaman nyata dari trader yang menggunakan X-Breaker Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Setelah 3 bulan pakai X-Breaker Pro, akun saya growth 35%. Yang paling saya suka adalah risk managementnya yang ketat, jadi tidur nyenyak."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-xbreaker-primary rounded-full flex items-center justify-center text-white font-bold">
                  AW
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ahmad W.</div>
                  <div className="text-sm text-gray-600">Trader Jakarta</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Custom EA untuk strategi scalping saya, hasilnya melebihi ekspektasi. Tim sangat profesional dan responsif!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-xbreaker-primary rounded-full flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rizky S.</div>
                  <div className="text-sm text-gray-600">Prop Trader</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Hosting service nya mantap, EA jalan 24/7 tanpa putus. Support nya juga fast response. Recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-xbreaker-primary rounded-full flex items-center justify-center text-white font-bold">
                  DP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dian P.</div>
                  <div className="text-sm text-gray-600">Full-time Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Berapa modal minimum untuk menggunakan X-Breaker Pro?",
                a: "Kami rekomendasikan minimal $2,000 untuk mendapatkan hasil optimal sesuai money management yang kami terapkan. Namun bisa disesuaikan dengan lot size yang lebih kecil untuk modal lebih rendah."
              },
              {
                q: "Apakah EA ini cocok untuk pemula?",
                a: "Ya! X-Breaker Pro fully automated sehingga cocok untuk pemula. Kami juga sediakan konsultasi gratis untuk membantu setup dan memahami cara kerja EA."
              },
              {
                q: "Bagaimana jika saya ingin melihat performa real EA sebelum membeli?",
                a: "Kami berikan akses password investor ke live account kami sehingga Anda bisa pantau performa secara real-time. Silakan request via WhatsApp."
              },
              {
                q: "Apakah ada money back guarantee?",
                a: "Ya, jika dalam 30 hari pertama EA tidak perform sesuai ekspektasi (dengan syarat & ketentuan tertentu), kami berikan full refund."
              },
              {
                q: "Berapa lama waktu development untuk Custom EA?",
                a: "Tergantung kompleksitas strategi, biasanya 2-4 minggu untuk EA simple hingga medium complexity. Project kompleks bisa sampai 6-8 minggu."
              },
              {
                q: "Apakah support tersedia 24/7?",
                a: "Support tersedia pada jam kerja (09:00-21:00 WIB) melalui WhatsApp. Untuk issue urgent di luar jam kerja, kami usahakan response maksimal 2 jam."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-xbreaker-secondary via-xbreaker-primary to-xbreaker-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Siap Raih Profit Konsisten?
              </h2>
              <p className="text-xl text-xbreaker-light">
                Hubungi kami untuk konsultasi gratis dan dapatkan akses password investor
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Tim kami siap membantu Anda memulai journey automated trading yang profitable
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition group">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">WhatsApp</div>
                        <div className="font-semibold text-gray-900">+62 812-3456-7890</div>
                      </div>
                    </a>

                    <a href="mailto:admin@xbreakerpro.com" className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-semibold text-gray-900">admin@xbreakerpro.com</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-xbreaker rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">✨ Special Offer</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Konsultasi gratis 30 menit</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Akses password investor live account</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Free setup & installation assistance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Dokumentasi lengkap & video tutorial</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm mb-1">Promo Bulan Ini</div>
                    <div className="text-2xl font-bold">Diskon 20%</div>
                    <div className="text-sm">Untuk 10 client pertama</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a href="https://wa.me/6281234567890?text=Halo%20X-Breaker%20Pro,%20saya%20ingin%20konsultasi%20dan%20request%20password%20investor" target="_blank" className="inline-flex items-center space-x-3 bg-gradient-xbreaker text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <Rocket className="w-6 h-6" />
                  <span>Mulai Konsultasi Sekarang</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Response time rata-rata: &lt; 15 menit pada jam kerja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
{/*}                <div className="w-12 h-12 bg-gradient-xbreaker rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div> */}
              <Image 
                src="/x-breaker-logo.png" 
                alt="X-Breaker Pro Logo" 
                width={48} 
                height={48}
                className="rounded-lg"
              />                
                <div>
                  <h1 className="text-2xl font-bold text-white">X-BREAKER PRO</h1>
                  <p className="text-xs text-xbreaker-accent font-semibold">BREAK THE LIMIT</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Expert Advisor trading terbaik dengan strategi Martingale Breakout yang terbukti profitable. Forward test 26.5% ROI dalam 2.5 bulan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-xbreaker-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-xbreaker-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-xbreaker-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-xbreaker-accent transition">Fitur</a></li>
                <li><a href="#performance" className="hover:text-xbreaker-accent transition">Performa</a></li>
                <li><a href="#services" className="hover:text-xbreaker-accent transition">Layanan</a></li>
                <li><a href="#contact" className="hover:text-xbreaker-accent transition">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-xbreaker-accent transition">EA Hosting</a></li>
                <li><a href="#services" className="hover:text-xbreaker-accent transition">Custom EA Development</a></li>
                <li><a href="#services" className="hover:text-xbreaker-accent transition">Konsultasi Trading</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 X-Breaker Pro. All rights reserved.</p>
            <p className="mt-2">
              <strong className="text-yellow-400">Disclaimer:</strong> Trading forex dan CFD memiliki risiko tinggi. Past performance tidak menjamin hasil di masa depan. Trade dengan bijak dan gunakan risk management yang baik.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6281234567890?text=Halo%20X-Breaker%20Pro,%20saya%20ingin%20konsultasi" 
        target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110 z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </main>
  )
}

// Helper component for Eye icon (not in lucide-react default)
function Eye({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}
