'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  CheckCircle,
  AlertTriangle,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  Brain,
  Users,
  DollarSign
} from 'lucide-react'

/**
 * Pricing Page - Automation Wave Urgency + Premium Justification
 * Handles objections through competitive threat and cost comparison
 */

export function PricingSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* PRICING HERO - URGENCY FOCUSED */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500 rounded-full mb-6">
            <Clock className="h-4 w-4 text-red-400" />
            <span className="text-red-300 font-semibold">⚠️ AUTOMATION PRICING WINDOW CLOSING</span>
          </div>
          
          <h1 className="text-6xl font-black text-white mb-6">
            Automate Before Prices<br />
            <span className="text-red-400">Skyrocket With Demand</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Early automation adopters lock in <span className="text-green-400 font-bold">lifetime pricing protection</span>. 
            When automation becomes standard (Q2 2025), prices will <span className="text-red-400 font-bold">triple</span>.
          </p>

          <div className="bg-yellow-900/30 border border-yellow-500 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="text-yellow-400 font-bold mb-2">💰 EARLY ADOPTER PRICING PROTECTION</div>
            <div className="text-gray-300">
              <span className="text-white font-bold">First 100 customers</span> get lifetime rates. 
              When competitors realize they need automation (estimated Q2 2025), 
              <span className="text-yellow-400 font-bold"> prices increase 300%</span> due to demand surge.
            </div>
          </div>
        </div>

        {/* COST COMPARISON - OBJECTION HANDLING */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center text-white mb-12">
            Traditional vs Trinity Agent Costs<br />
            <span className="text-red-400">(The Numbers Don't Lie)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MANUAL OPERATIONS - EXPENSIVE */}
            <Card className="bg-red-900/30 border-2 border-red-600">
              <CardHeader className="text-center">
                <div className="text-red-400 font-bold mb-2">📉 MANUAL OPERATIONS</div>
                <CardTitle className="text-red-300">Your Current Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Analytics Department:</span>
                    <span className="text-red-400 font-bold">$200K/month</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Marketing Team:</span>
                    <span className="text-red-400 font-bold">$150K/month</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Operations Staff:</span>
                    <span className="text-red-400 font-bold">$120K/month</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Benefits + Overhead:</span>
                    <span className="text-red-400 font-bold">$140K/month</span>
                  </div>
                  <div className="border-t border-red-600 pt-4 flex justify-between text-white font-bold">
                    <span>TOTAL MONTHLY:</span>
                    <span className="text-red-400 text-xl">$610K</span>
                  </div>
                  <div className="text-center text-red-300 text-xs">
                    💸 $7.3M annually + benefits, hiring, training costs
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TRINITY AGENTS - AFFORDABLE */}
            <Card className="bg-green-900/30 border-2 border-green-500 transform scale-105">
              <CardHeader className="text-center">
                <Badge className="bg-green-600 text-white mb-2">🚀 RECOMMENDED</Badge>
                <div className="text-green-400 font-bold mb-2">⚡ TRINITY AUTOMATION</div>
                <CardTitle className="text-green-300">Complete Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>AgentTrinity Pro:</span>
                    <span className="text-green-400 font-bold">$2,499/month</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>CreativeTrinity:</span>
                    <span className="text-green-400 font-bold">$399/month</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>OracleTrinity:</span>
                    <span className="text-green-400 font-bold">$699/month</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Setup + Support:</span>
                    <span className="text-green-400 font-bold">$0/month</span>
                  </div>
                  <div className="border-t border-green-500 pt-4 flex justify-between text-white font-bold">
                    <span>TOTAL MONTHLY:</span>
                    <span className="text-green-400 text-xl">$3,597</span>
                  </div>
                  <div className="text-center text-green-300 text-xs">
                    💰 $43K annually - complete automation
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SAVINGS CALCULATION */}
            <Card className="bg-blue-900/30 border-2 border-blue-500">
              <CardHeader className="text-center">
                <div className="text-blue-400 font-bold mb-2">💎 YOUR ADVANTAGE</div>
                <CardTitle className="text-blue-300">Competitive Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Monthly Savings:</span>
                    <span className="text-blue-400 font-bold">$606,403</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Annual Savings:</span>
                    <span className="text-blue-400 font-bold">$7.3M</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>ROI:</span>
                    <span className="text-blue-400 font-bold">16,850%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Payback Period:</span>
                    <span className="text-blue-400 font-bold">2.1 days</span>
                  </div>
                  <div className="border-t border-blue-500 pt-4 text-center">
                    <div className="text-blue-400 font-bold text-lg">99.4% Cost Reduction</div>
                    <div className="text-blue-300 text-xs">vs manual departments</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* OBJECTION HANDLING */}
          <div className="mt-16 bg-gray-900 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Objection Handling: <span className="text-red-400">"But The Price Seems High..."</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-red-400 font-bold mb-4">❌ EXPENSIVE THINKING:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>"$2,499/month is expensive"</li>
                  <li>"We can hire people for less"</li>
                  <li>"Let's wait and see what happens"</li>
                  <li>"We need committee approval first"</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-green-400 font-bold mb-4">✅ AUTOMATION THINKING:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>"$2,499 vs $200K department = 99% savings"</li>
                  <li>"AI works 24/7, humans don't"</li>
                  <li>"Competitors are deploying NOW"</li>
                  <li>"15-minute deployment beats 6-month delays"</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8 p-4 bg-red-900/30 border border-red-500 rounded-lg">
              <div className="text-red-400 font-bold mb-2">⚠️ REALITY CHECK</div>
              <div className="text-gray-300">
                While you debate pricing, your competitors are <span className="text-red-400 font-bold">already automating</span>. 
                The question isn't "Can we afford Trinity Agents?" It's 
                <span className="text-white font-bold">"Can we afford to fall behind?"</span>
              </div>
            </div>
          </div>
        </div>

        {/* ENTERPRISE PRICING JUSTIFICATION */}
        <div className="text-center py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl">
          <h2 className="text-4xl font-black text-white mb-8">
            Why Trinity Agents Cost Less Than<br />
            <span className="text-red-400">One Junior Employee</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👨‍💼</div>
              <div className="text-xl font-bold text-white mb-2">Junior Analyst</div>
              <div className="text-gray-300 text-sm mb-4">
                • $80K salary + $40K benefits<br />
                • Works 40 hours/week<br />
                • Needs training, vacation, sick days<br />
                • Makes errors, gets tired
              </div>
              <div className="text-red-400 font-bold">$120K/year</div>
            </div>

            <div className="text-center p-6 bg-green-900/30 border border-green-500 rounded-xl transform scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <div className="text-xl font-bold text-green-400 mb-2">Trinity Agent</div>
              <div className="text-gray-300 text-sm mb-4">
                • Works 24/7/365<br />
                • Never needs breaks or training<br />
                • 1000x faster processing<br />
                • 99.9% accuracy, explainable decisions
              </div>
              <div className="text-green-400 font-bold">$30K/year</div>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-xl font-bold text-blue-400 mb-2">Your Advantage</div>
              <div className="text-gray-300 text-sm mb-4">
                • 75% cost savings vs human<br />
                • 8760x more working hours<br />
                • No HR issues or turnover<br />
                • Scales infinitely with demand
              </div>
              <div className="text-blue-400 font-bold">Priceless Edge</div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-900/30 border border-yellow-500 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="text-yellow-400 font-bold text-lg mb-2">
              🧮 ENTERPRISE CFO CALCULATION
            </div>
            <div className="text-gray-300">
              <span className="text-white font-bold">Trinity Agent ROI:</span> Replace $200K/month department with $2,499/month automation = 
              <span className="text-green-400 font-bold"> $2.37M annual savings</span>. 
              Payback period: <span className="text-yellow-400 font-bold">2.1 days</span>.
            </div>
          </div>
        </div>

        {/* COMMON OBJECTIONS - HANDLED */}
        <div className="py-20">
          <h2 className="text-4xl font-black text-center text-white mb-12">
            Common Objections<br />
            <span className="text-red-400">(And Why They Don't Matter)</span>
          </h2>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* OBJECTION 1: PRICE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 border border-gray-700 rounded-xl p-8">
              <div>
                <div className="text-red-400 font-bold mb-3">❌ "The pricing is too high"</div>
                <div className="text-gray-300 text-sm">
                  Thinking: $2,499/month feels expensive compared to current software costs.
                </div>
              </div>
              <div>
                <div className="text-green-400 font-bold mb-3">✅ REALITY CHECK:</div>
                <div className="text-gray-300 text-sm">
                  <span className="text-green-400 font-bold">You're not buying software - you're replacing departments.</span> 
                  One analytics hire costs $10K+/month. Trinity Agents replace entire teams for less than 
                  <span className="text-white font-bold"> one junior employee</span>.
                </div>
              </div>
            </div>

            {/* OBJECTION 2: TIMING */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 border border-gray-700 rounded-xl p-8">
              <div>
                <div className="text-red-400 font-bold mb-3">❌ "Let's wait and see what happens"</div>
                <div className="text-gray-300 text-sm">
                  Thinking: Automation is new, maybe prices will drop, let's be cautious.
                </div>
              </div>
              <div>
                <div className="text-green-400 font-bold mb-3">✅ COMPETITIVE REALITY:</div>
                <div className="text-gray-300 text-sm">
                  <span className="text-red-400 font-bold">Your competitors aren't waiting.</span> 
                  They're automating NOW and gaining 60-85% cost advantages. 
                  <span className="text-white font-bold"> Every day you wait, they get further ahead.</span>
                </div>
              </div>
            </div>

            {/* OBJECTION 3: IMPLEMENTATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 border border-gray-700 rounded-xl p-8">
              <div>
                <div className="text-red-400 font-bold mb-3">❌ "Implementation will be too complex"</div>
                <div className="text-gray-300 text-sm">
                  Thinking: AI deployments are complex, require months of setup, technical expertise.
                </div>
              </div>
              <div>
                <div className="text-green-400 font-bold mb-3">✅ DEPLOYMENT REALITY:</div>
                <div className="text-gray-300 text-sm">
                  <span className="text-green-400 font-bold">15-minute deployment vs 6+ months traditional.</span> 
                  While competitors spend months planning, you're already automated and 
                  <span className="text-white font-bold"> capturing market advantages</span>.
                </div>
              </div>
            </div>

            {/* OBJECTION 4: TRUST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 border border-gray-700 rounded-xl p-8">
              <div>
                <div className="text-red-400 font-bold mb-3">❌ "We don't trust black box AI"</div>
                <div className="text-gray-300 text-sm">
                  Thinking: AI decisions are mysterious, can't explain to board, regulatory concerns.
                </div>
              </div>
              <div>
                <div className="text-green-400 font-bold mb-3">✅ EXPLAINABLE ADVANTAGE:</div>
                <div className="text-gray-300 text-sm">
                  <span className="text-green-400 font-bold">100% explainable AI with SHAP analysis.</span> 
                  Every Trinity Agent decision includes full reasoning. Perfect for enterprise compliance and 
                  <span className="text-white font-bold"> board presentations</span>.
                </div>
              </div>
            </div>
          </div>

          {/* FINAL URGENCY */}
          <div className="text-center mt-16 bg-red-900/30 border-2 border-red-500 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-red-400">Stop Making Excuses.</span><br />
              Start Making Advantages.
            </h3>
            
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Your competitors aren't debating objections - they're deploying automation and 
              <span className="text-red-400 font-bold"> gaining massive cost advantages</span>. 
              <span className="text-white font-bold">Every day of delay is market share lost.</span>
            </p>

            <Button size="xl" className="bg-red-600 hover:bg-red-700 text-xl px-16 py-6 font-black animate-pulse">
              🚨 DEPLOY NOW - BEFORE IT'S TOO LATE
            </Button>

            <div className="mt-6 space-y-2">
              <div className="text-white font-bold">⚡ 15-minute setup • 🛡️ 90-day guarantee • 💰 Lifetime pricing protection</div>
              <div className="text-red-400 text-sm font-bold">
                ⏰ Limited offer: Only 53 automation licenses remaining this quarter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PricingCards() {
  const plans = [
    {
      name: "AgentTrinity Pro",
      price: 2499,
      description: "Replace entire analytics department",
      features: [
        "Oracle + Sentinel + Sage Agents",
        "Complete department automation", 
        "24/7 explainable AI operations",
        "Enterprise security & compliance",
        "Unlimited automation workflows",
        "Priority support & optimization"
      ],
      savings: "$197K+/month vs manual team",
      cta: "🚨 AUTOMATE ANALYTICS NOW",
      popular: true,
      threat: "Competitors with Trinity Agents report 60% cost advantages"
    },
    {
      name: "OracleTrinity Analytics", 
      price: 699,
      description: "Data intelligence automation",
      features: [
        "Oracle Agent specialization",
        "Advanced analytics automation",
        "Predictive modeling suite", 
        "Real-time data processing",
        "Custom report generation",
        "SHAP explainability"
      ],
      savings: "$149K+/month vs analysts",
      cta: "⚡ DEPLOY ORACLE AGENT",
      threat: "Manual analytics teams can't compete with 1000x speed"
    },
    {
      name: "CreativeTrinity Studio",
      price: 399, 
      description: "Marketing department replacement",
      features: [
        "Complete creative automation",
        "Brand voice consistency",
        "Multi-format content generation",
        "Campaign performance optimization",
        "A/B testing automation",
        "Social media management"
      ],
      savings: "$79K+/month vs marketing team",
      cta: "🎨 AUTOMATE MARKETING",
      threat: "Automated competitors create unlimited content 24/7"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <Card key={index} className={`relative ${plan.popular ? 'border-2 border-red-500 transform scale-105' : 'border border-gray-700'} bg-gradient-to-br from-gray-800 to-gray-900 hover:border-red-400 transition-all group`}>
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-red-600 text-white px-6 py-2 font-bold">
                🏆 MOST POPULAR
              </Badge>
            </div>
          )}
          
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
            <div className="text-gray-400 mb-4">{plan.description}</div>
            
            <div className="mb-4">
              <span className="text-5xl font-black text-red-400">${plan.price.toLocaleString()}</span>
              <span className="text-gray-400">/month</span>
            </div>
            
            <div className="text-green-400 font-bold text-sm">{plan.savings}</div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-red-900/30 border border-red-600 rounded-lg p-3 mb-4">
              <div className="text-red-400 font-bold text-xs mb-1">⚠️ COMPETITIVE THREAT:</div>
              <div className="text-gray-300 text-xs">{plan.threat}</div>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 font-bold group-hover:animate-pulse">
              {plan.cta}
            </Button>
            
            <div className="text-center mt-3 text-xs text-gray-400">
              ⚡ 15-min deploy • 🛡️ 90-day guarantee
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}