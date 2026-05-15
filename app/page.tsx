export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Education Finance Tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Optimize Your Student Loan Payoff
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze all your loans, compare payoff strategies, and discover if you qualify for forgiveness programs — all in one place.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to crush your debt</p>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "Unlimited loan portfolios",
              "Avalanche & snowball strategies",
              "Forgiveness program eligibility check",
              "Income-driven repayment analysis",
              "Payoff timeline projections",
              "Interest savings calculator"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What payoff strategies does it support?</h3>
            <p className="text-[#8b949e] text-sm">We support the avalanche method (highest interest first), snowball method (smallest balance first), and custom hybrid strategies tailored to your income and goals.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can it check my forgiveness program eligibility?</h3>
            <p className="text-[#8b949e] text-sm">Yes. We analyze your loan types, employer, and repayment history to determine eligibility for PSLF, Teacher Loan Forgiveness, income-driven forgiveness, and more.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my financial data secure?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. All data is encrypted in transit and at rest. We never sell your information and you can delete your account and data at any time.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Student Loan Payoff Optimizer. All rights reserved.</p>
      </footer>
    </main>
  );
}
