'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote, TrendingUp, Zap, Shield } from 'lucide-react'

/**
 * Customer Testimonials & Case Studies - Automation Wave Urgency Focus
 * Emphasizes competitive advantage and fear of missing out
 */

export function TestimonialsSection() {
  const testimonials = [
    {
      company: "TechCorp Analytics",
      industry: "Financial Services", 
      role: "Chief Technology Officer",
      name: "Sarah M.",
      avatar: "S",
      rating: 5,
      testimonial: "Trinity Agents automated our entire analytics department in 15 minutes. While our competitors are still hiring analysts, we're processing data 1000x faster with 85% cost reduction. Our board is amazed.",
      results: {
        cost_savings: "87%",
        speed_increase: "1000x", 
        time_to_deploy: "15 minutes"
      },
      urgency_note: "Deployed 6 months before competitors - now market leader"
    },
    {
      company: "RetailMax Operations",
      industry: "E-commerce",
      role: "VP Operations", 
      name: "Michael K.",
      avatar: "M",
      rating: 5,
      testimonial: "We replaced our 15-person operations team with Sage Agent. The automation handles everything - inventory, pricing, forecasting. Our competitors are still doing this manually while we dominate with AI.",
      results: {
        team_replaced: "15 people",
        monthly_savings: "$120K",
        accuracy_improvement: "99.2%"
      },
      urgency_note: "First in industry to automate - competitors scrambling to catch up"
    },
    {
      company: "MedTech Analytics",
      industry: "Healthcare",
      role: "Chief Medical Officer",
      name: "Dr. Jennifer L.",
      avatar: "J", 
      rating: 5,
      testimonial: "Oracle Agent processes patient data and generates insights faster than our entire medical analytics team. The explainable AI is crucial for regulatory compliance. We're years ahead of competition.",
      results: {
        processing_speed: "500x faster",
        compliance_score: "100%",
        department_size_reduction: "12 analysts → 1 Trinity Agent"
      },
      urgency_note: "Early adoption = regulatory advantage over slower competitors"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-red-400" />
            <span className="text-red-300 font-semibold">COMPETITIVE ADVANTAGE PROVEN</span>
          </div>
          
          <h2 className="text-5xl font-black text-white mb-6">
            Companies That Deployed First<br />
            <span className="text-red-400">Now Dominate Their Markets</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Don't just take our word for it. See how early Trinity Agent adopters 
            <span className="text-red-400 font-bold"> crushed their competition</span> by automating first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-red-500 transition-all group">
              <CardContent className="p-8">
                {/* STAR RATING */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* URGENCY BADGE */}
                <Badge className="bg-red-600 text-white mb-4 font-bold">
                  🚀 {testimonial.urgency_note}
                </Badge>

                {/* TESTIMONIAL */}
                <div className="relative mb-6">
                  <Quote className="h-6 w-6 text-red-400 absolute -top-2 -left-2" />
                  <p className="text-gray-300 text-sm leading-relaxed pl-4 italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                {/* RESULTS METRICS */}
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6">
                  <div className="text-red-400 font-bold text-xs mb-2 uppercase">
                    🎯 AUTOMATION RESULTS
                  </div>
                  <div className="space-y-2 text-xs">
                    {Object.entries(testimonial.results).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">
                          {key.replace(/_/g, ' ')}:
                        </span>
                        <span className="text-green-400 font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ATTRIBUTION */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                    <div className="text-red-400 text-xs font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* COMPETITIVE THREAT WARNING */}
        <div className="mt-16 text-center bg-red-900/30 border-2 border-red-600 rounded-xl p-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-red-400" />
            <span className="text-red-400 font-bold text-lg">COMPETITIVE INTELLIGENCE</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Every Day You Wait, More Competitors Deploy Trinity Agents
          </h3>
          
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            These companies didn't wait for "perfect timing" or "committee approval." They deployed fast, 
            <span className="text-red-400 font-bold"> gained massive advantages</span>, and now their competitors are 
            <span className="text-yellow-400 font-bold"> scrambling to catch up</span>.
          </p>
          
          <div className="text-red-300 text-sm font-bold">
            ⚠️ The automation gap widens every day. Deploy now or be left behind.
          </div>
        </div>
      </div>
    </div>
  )
}

export function RiskReversalSection() {
  return (
    <div className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-black text-white">
            <span className="text-green-400">Zero Risk</span> Automation Deployment
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're so confident Trinity Agents will give you competitive advantage, 
            <span className="text-green-400 font-bold"> we guarantee your automation success</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 14-DAY TRIAL */}
            <div className="text-center p-8 bg-green-900/30 border border-green-500 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">14-Day Free Trial</h3>
              <p className="text-gray-300 text-sm">
                Deploy Trinity Agents risk-free. See the automation advantage before competitors do.
                <span className="text-green-400 font-bold"> No credit card required.</span>
              </p>
            </div>

            {/* MONEY-BACK GUARANTEE */}
            <div className="text-center p-8 bg-blue-900/30 border border-blue-500 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">90-Day Guarantee</h3>
              <p className="text-gray-300 text-sm">
                If Trinity Agents don't provide <span className="text-blue-400 font-bold">10x ROI</span> within 90 days, 
                we'll refund everything. <span className="text-blue-400 font-bold">Your automation is guaranteed.</span>
              </p>
            </div>

            {/* COMPETITIVE PROTECTION */}
            <div className="text-center p-8 bg-purple-900/30 border border-purple-500 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Competitive Protection</h3>
              <p className="text-gray-300 text-sm">
                We monitor your industry for automation threats. 
                <span className="text-purple-400 font-bold"> If competitors deploy similar AI, we upgrade you automatically.</span>
              </p>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-500 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="text-yellow-400 font-bold text-lg mb-2">
              💡 EARLY ADOPTER PROTECTION
            </div>
            <div className="text-gray-300">
              First 100 customers get <span className="text-yellow-400 font-bold">lifetime pricing protection</span> - 
              your rates never increase, even as automation becomes standard and prices rise.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CTAVariations() {
  const ctaVariations = [
    // URGENCY FOCUSED
    {
      primary: "🚨 AUTOMATE NOW - BEFORE COMPETITORS",
      secondary: "Deploy Trinity Agents in 15 minutes",
      urgency: "⚠️ Only 47 days until automation surge"
    },
    // FEAR FOCUSED  
    {
      primary: "⚡ DON'T LET COMPETITORS AUTOMATE YOU OUT",
      secondary: "Trinity Agents = Instant market advantage",
      urgency: "🔥 Limited: 100 licenses this quarter"
    },
    // COMPETITIVE FOCUSED
    {
      primary: "🏆 BEAT YOUR COMPETITION WITH AI",
      secondary: "85% cost reduction while they stay manual",
      urgency: "⏰ First-mover advantage window closing"
    },
    // DOMINANCE FOCUSED
    {
      primary: "🚀 DOMINATE YOUR MARKET WITH AUTOMATION",
      secondary: "Trinity Agents work 24/7, competitors don't",
      urgency: "💰 Save $2M annually vs manual operations"
    }
  ]

  return (
    <div className="space-y-8">
      {ctaVariations.map((cta, index) => (
        <div key={index} className="text-center p-6 bg-gray-900 border border-gray-700 rounded-xl">
          <div className="text-2xl font-black text-red-400 mb-2">
            {cta.primary}
          </div>
          <div className="text-gray-300 mb-2">
            {cta.secondary}
          </div>
          <div className="text-yellow-400 text-sm font-bold">
            {cta.urgency}
          </div>
        </div>
      ))}
    </div>
  )
}

export function CompetitiveIntelligence() {
  return (
    <div className="py-20 bg-gradient-to-r from-red-900/20 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">
            <span className="text-red-400">Competitive Intelligence:</span><br />
            Who's Automating in Your Industry
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't be blindsided. See which companies in your industry are already gaining automation advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-red-900/30 border border-red-600 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-red-400 mb-2">78%</div>
            <div className="text-white font-semibold mb-1">Financial Services</div>
            <div className="text-red-300 text-xs">Already automating analytics</div>
          </div>
          
          <div className="bg-orange-900/30 border border-orange-600 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-orange-400 mb-2">65%</div>
            <div className="text-white font-semibold mb-1">Healthcare</div>
            <div className="text-orange-300 text-xs">Automated decision support</div>
          </div>
          
          <div className="bg-yellow-900/30 border border-yellow-600 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-yellow-400 mb-2">54%</div>
            <div className="text-white font-semibold mb-1">Retail</div>
            <div className="text-yellow-300 text-xs">Operations fully automated</div>
          </div>
          
          <div className="bg-green-900/30 border border-green-600 rounded-xl p-6 text-center">
            <div className="text-3xl font-black text-green-400 mb-2">71%</div>
            <div className="text-white font-semibold mb-1">Manufacturing</div>
            <div className="text-green-300 text-xs">Predictive maintenance active</div>
          </div>
        </div>

        <div className="text-center mt-12 bg-red-900/30 border-2 border-red-500 rounded-xl p-8">
          <div className="text-red-400 font-bold text-lg mb-4">
            🚨 YOUR INDUSTRY STATUS
          </div>
          <div className="text-white text-xl mb-2">
            Is your company in the <span className="text-green-400 font-bold">automated majority</span> or the 
            <span className="text-red-400 font-bold"> vulnerable minority</span>?
          </div>
          <div className="text-gray-300 text-sm">
            Check your competitive position before it's too late.
          </div>
        </div>
      </div>
    </div>
  )
}