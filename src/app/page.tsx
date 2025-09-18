'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Brain,
  Sparkles,
  Shield,
  BarChart3,
  MessageSquare,
  Palette,
  Video,
  Heart,
  ShoppingCart,
  Factory,
  Building,
  ArrowRight,
  Star,
  Zap,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react'

/**
 * x3o.ai Marketplace - Killer Conversion Copy
 * Focus: Automation Wave Urgency
 * Message: "Deploy before your competitors automate you out of business"
 */

export default function X3OMarketplacePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 47,
    hours: 12,
    minutes: 34
  })

  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(127, 29, 29, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.15) 0%, transparent 50%), linear-gradient(135deg, #000000, #1f2937, #7f1d1d)' }}>
      {/* URGENT HEADER BAR */}
      <div className="x3o-alert-urgent text-center py-3">
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-yellow-300">
          <AlertTriangle className="h-4 w-4" />
          <span>🚨 AUTOMATION WAVE ALERT: 40% of jobs will be automated by 2030</span>
          <AlertTriangle className="h-4 w-4" />
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="x3o-header sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold">x3o.ai</div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-red-600 text-white animate-pulse">
                ⚡ AHEAD OF THE WAVE
              </Badge>
              <Button className="bg-red-600 hover:bg-red-700">
                Deploy Now - 15 Min Setup
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6">
        {/* KILLER HERO SECTION - AUTOMATION WAVE URGENCY */}
        <div className="text-center py-20 space-y-8">
          {/* SCARCITY COUNTDOWN */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-red-600/20 border border-red-500 rounded-full mb-4">
            <Clock className="h-5 w-5 text-red-400" />
            <span className="text-red-300 font-semibold">
              Competition Accelerating: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m until Q1 automation surge
            </span>
          </div>

          {/* FEAR-DRIVEN HEADLINE */}
          <h1 className="text-7xl font-black leading-tight">
            <span className="block text-red-500">Deploy Before</span>
            <span className="block text-white">Your Competitors</span>
            <span className="block bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Automate You Out
            </span>
            <span className="block text-gray-300">of Business</span>
          </h1>

          {/* URGENCY SUBHEADING */}
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-red-400 font-bold">The automation wave is here.</span> Companies deploying AI first will 
            <span className="text-yellow-400 font-bold"> dominate their markets</span> while others struggle to survive. 
            <span className="text-white font-bold">Don't be left behind.</span>
          </p>

          {/* THREAT STATISTICS */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
            <div className="text-center p-6 bg-red-900/30 border border-red-700 rounded-xl">
              <div className="text-4xl font-black text-red-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Jobs Automatable by 2030</div>
              <div className="text-xs text-red-400 mt-1">Your department could be next</div>
            </div>
            
            <div className="text-center p-6 bg-orange-900/30 border border-orange-700 rounded-xl">
              <div className="text-4xl font-black text-orange-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Cost Reduction Possible</div>
              <div className="text-xs text-orange-400 mt-1">While competitors stay manual</div>
            </div>
            
            <div className="text-center p-6 bg-yellow-900/30 border border-yellow-700 rounded-xl">
              <div className="text-4xl font-black text-yellow-400 mb-2">15min</div>
              <div className="text-sm text-gray-300">x3o Deployment Time</div>
              <div className="text-xs text-yellow-400 mt-1">vs 6+ months traditional</div>
            </div>
          </div>

          {/* FEAR-BASED CTA */}
          <div className="space-y-4">
            <Button size="xl" className="bg-red-600 hover:bg-red-700 text-xl px-12 py-6 animate-pulse">
              <Zap className="h-6 w-6 mr-3" />
              AUTOMATE NOW - BEFORE IT'S TOO LATE
            </Button>
            
            <p className="text-sm text-gray-400">
              ⚡ 15-minute deployment • 🚀 Immediate competitive advantage • 🛡️ Enterprise-grade security
            </p>
            
            <div className="text-xs text-red-400 font-semibold">
              ⚠️ WARNING: Competitors using Trinity Agents report 40-60% cost advantages
            </div>
          </div>
        </div>

        {/* COMPETITIVE THREAT SECTION */}
        <div className="py-20 bg-gradient-to-r from-red-900/20 to-black/20 rounded-3xl mb-20 border border-red-800">
          <div className="text-center space-y-8 px-12">
            <div className="text-red-400 font-bold text-lg">
              🚨 COMPETITIVE THREAT ANALYSIS
            </div>
            
            <h2 className="text-5xl font-black text-white leading-tight">
              While You Read This,<br />
              <span className="text-red-400">Your Competitors Are Automating</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* WITHOUT X3O */}
              <div className="p-8 bg-red-900/30 border border-red-600 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  WITHOUT x3o (You're Vulnerable)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Manual processes while competitors automate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>$2M+ annual department costs vs $30K automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>6+ month implementation while market moves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Black box AI with no explanations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Falling behind automated competitors</span>
                  </li>
                </ul>
              </div>

              {/* WITH X3O */}
              <div className="p-8 bg-green-900/30 border border-green-500 rounded-xl">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  WITH x3o (You Dominate)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Trinity Agents automate entire departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>85% cost reduction vs manual operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>15-minute deployment beats all competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>100% explainable AI for enterprise trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Market leadership through automation advantage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-600 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg mb-2">
                  ⚡ FIRST-MOVER ADVANTAGE WINDOW CLOSING
                </div>
                <div className="text-gray-300">
                  Companies deploying automation NOW capture 40-60% cost advantages before competitors catch up.
                  <span className="text-white font-bold"> The window won't stay open.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRINITY AGENT PRODUCT SHOWCASE - URGENCY FOCUSED */}
        <div className="py-20">
          <div className="text-center mb-16">
            <div className="text-red-400 font-bold text-lg mb-4">
              🎯 AUTOMATION ARSENAL
            </div>
            <h2 className="text-5xl font-black text-white mb-6">
              Trinity Agents That Replace<br />
              <span className="text-red-400">Entire Departments</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              While your competitors hire more humans, you deploy AI agents that work 24/7, 
              <span className="text-red-400 font-bold"> never take breaks</span>, and 
              <span className="text-yellow-400 font-bold"> cost 95% less</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AGENTTRINITY PRO - FLAGSHIP */}
            <Card className="bg-gradient-to-br from-red-900/50 to-purple-900/50 border-2 border-red-500 relative overflow-hidden group hover:scale-105 transition-all">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                🏆 FLAGSHIP
              </div>
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-white">
                  AgentTrinity Pro
                </CardTitle>
                
                <CardDescription className="text-red-300 font-semibold">
                  Replace Your Entire Analytics Department
                </CardDescription>
                
                <div className="bg-red-900/50 border border-red-600 rounded-lg p-4 mt-4">
                  <div className="text-red-300 text-sm font-bold mb-2">⚠️ COMPETITIVE THREAT:</div>
                  <div className="text-gray-300 text-sm">
                    Companies with Trinity Agents process data <span className="text-red-400 font-bold">1000x faster</span> than manual teams. 
                    Your analytics department becomes obsolete overnight.
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Oracle: Replaces 20+ data analysts</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Sentinel: Automates all monitoring</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Sage: Optimizes every operation</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>100% explainable decisions</span>
                  </li>
                </ul>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-4xl font-black text-red-400">$2,499</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 line-through">Manual: $200K+/month</div>
                      <div className="text-green-400 font-bold text-sm">Save $197K+/month</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3 font-bold">
                    🚨 DEPLOY BEFORE COMPETITORS
                  </Button>
                  
                  <div className="text-center mt-2 text-xs text-red-400">
                    ⚡ 15-minute setup • No 6-month delays
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ORACLE TRINITY - POPULAR */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500 group hover:scale-105 transition-all">
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                🔥 POPULAR
              </div>
              
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-white">
                  OracleTrinity Analytics
                </CardTitle>
                
                <CardDescription className="text-blue-300">
                  Eliminate Your Data Team Overnight
                </CardDescription>

                <div className="bg-blue-900/50 border border-blue-600 rounded-lg p-3 mt-4">
                  <div className="text-xs text-blue-300">
                    <span className="font-bold">AUTOMATION IMPACT:</span> Replaces 15+ analysts, 
                    <span className="text-blue-400 font-bold"> works 24/7</span>, processes data 
                    <span className="text-cyan-400 font-bold">1000x faster</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Manual Analytics Team:</span>
                    <span className="text-red-400 font-bold">$150K+/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OracleTrinity:</span>
                    <span className="text-green-400 font-bold">$699/month</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-700 pt-2">
                    <span className="font-bold text-white">Monthly Savings:</span>
                    <span className="text-green-400 font-bold text-lg">$149K+</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold">
                  ⚡ AUTOMATE ANALYTICS NOW
                </Button>
              </CardContent>
            </Card>

            {/* CREATIVE TRINITY STUDIO */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500 group hover:scale-105 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-white">
                  CreativeTrinity Studio
                </CardTitle>
                
                <CardDescription className="text-purple-300">
                  Replace Your Marketing Department
                </CardDescription>

                <div className="bg-purple-900/50 border border-purple-600 rounded-lg p-3 mt-4">
                  <div className="text-xs text-purple-300">
                    <span className="font-bold">AUTOMATION IMPACT:</span> Replaces 10+ marketers, creates 
                    <span className="text-pink-400 font-bold"> unlimited content</span>, optimizes campaigns 
                    <span className="text-purple-400 font-bold"> automatically</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-purple-400">$399</div>
                  <div className="text-gray-400">/month</div>
                  <div className="text-xs text-gray-500 line-through">Manual: $80K+/month</div>
                  <div className="text-green-400 text-sm font-bold">Save $79K+/month</div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 font-bold">
                  🎨 AUTOMATE MARKETING NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* URGENCY ESCALATION */}
        <div className="text-center py-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl">
          <h2 className="text-5xl font-black text-white mb-8">
            The Automation Wave<br />
            <span className="text-yellow-300">Won't Wait For You</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-white font-bold">Q1 2025</div>
              <div className="text-red-200 text-sm">Major automation surge begins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-bold">Right Now</div>
              <div className="text-red-200 text-sm">Early adopters gaining advantages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-white font-bold">Future</div>
              <div className="text-red-200 text-sm">Market leaders = Early automators</div>
            </div>
          </div>

          <div className="space-y-6">
            <Button size="xl" className="bg-white text-red-600 hover:bg-gray-100 text-2xl px-16 py-8 font-black">
              🚀 START AUTOMATING - 15 MINUTES TO DOMINANCE
            </Button>
            
            <div className="text-white/80 text-lg">
              <span className="font-bold">FREE 14-DAY TRIAL</span> • No Credit Card • Cancel Anytime • 
              <span className="text-yellow-300 font-bold"> But You Won't Want To</span>
            </div>
            
            <div className="text-red-200 text-sm font-semibold">
              ⚠️ Limited: Only 100 automation licenses available this quarter
            </div>
          </div>
        </div>

        {/* COMPETITIVE INTELLIGENCE */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Competitive Intelligence: 
              <span className="text-red-400">Who's Already Automating</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Don't be the last to know your competitors are automating. See who's already gained the advantage.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">🚨 Industries Already Automating</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Financial Services</span>
                    <span className="text-red-400 font-bold">78% automated</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Healthcare Analytics</span>
                    <span className="text-orange-400 font-bold">65% automated</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Retail Operations</span>
                    <span className="text-yellow-400 font-bold">54% automated</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Manufacturing</span>
                    <span className="text-green-400 font-bold">71% automated</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">⚡ Your Competition's Advantage</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Cost Reduction</span>
                    <span className="text-red-400 font-bold">60-85%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Speed Increase</span>
                    <span className="text-orange-400 font-bold">1000x</span>
                  </li>
                  <li className="flex justify-between">
                    <span>24/7 Operations</span>
                    <span className="text-yellow-400 font-bold">No breaks</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Error Reduction</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8 p-4 bg-red-900/30 border border-red-600 rounded-lg">
              <div className="text-red-400 font-bold mb-2">
                ⚠️ REALITY CHECK
              </div>
              <div className="text-gray-300">
                While you're reading this, your competitors are deploying Trinity Agents. 
                <span className="text-white font-bold"> Every day you wait, they get further ahead.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL URGENCY CTA */}
        <div className="text-center py-20 bg-gradient-to-r from-black to-red-900 rounded-3xl border-2 border-red-500">
          <h2 className="text-6xl font-black text-white mb-8">
            <span className="text-red-400">Automate</span> or Be <span className="text-gray-500">Automated</span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The choice is simple: <span className="text-red-400 font-bold">Deploy Trinity Agents now</span> and dominate your market, 
            or <span className="text-gray-500">watch automated competitors make you irrelevant</span>.
          </p>

          <div className="space-y-6">
            <Button size="xl" className="bg-red-600 hover:bg-red-700 text-2xl px-20 py-8 font-black animate-pulse">
              🚀 DEPLOY TRINITY AGENTS - BEAT YOUR COMPETITION
            </Button>
            
            <div className="text-white text-lg">
              <span className="font-bold">⚡ 15-minute deployment</span> • 
              <span className="font-bold">🛡️ Enterprise security</span> • 
              <span className="font-bold text-yellow-400">💰 85% cost reduction</span>
            </div>
            
            <div className="text-red-300 text-sm font-bold">
              ⏰ Window closing: Only 47 days until automation surge
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}