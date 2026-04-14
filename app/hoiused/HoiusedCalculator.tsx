'use client'
import { useState, useMemo } from 'react'
import type { BankData } from './types'

const TERM_OPTIONS = [1, 3, 6, 9, 12, 24] as const
type TermMonths = (typeof TERM_OPTIONS)[number]

function formatEur(value: number): string {
  return new Intl.NumberFormat('et-EE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

interface Props {
  banks: BankData[]
  updatedAt: string
}

export default function HoiusedCalculator({ banks, updatedAt }: Props) {
  const [amount, setAmount] = useState(10_000)
  const [amountRaw, setAmountRaw] = useState('10000')
  const [term, setTerm] = useState<TermMonths>(12)

  const results = useMemo(() => {
    if (!amount || amount <= 0) return []
    return banks
      .flatMap((bank) => {
        const rateEntry = bank.rates.find((r) => r.months === term)
        if (!rateEntry || amount < bank.min) return []
        const earned = amount * (rateEntry.rate / 100) * (term / 12)
        return [{ bank, rate: rateEntry.rate, earned, total: amount + earned }]
      })
      .sort((a, b) => b.earned - a.earned)
  }, [banks, amount, term])

  const belowMin = useMemo(
    () => banks.filter((b) => b.rates.some((r) => r.months === term) && amount < b.min),
    [banks, amount, term]
  )

  const noOffer = useMemo(
    () => banks.filter((b) => !b.rates.some((r) => r.months === term)),
    [banks, term]
  )

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\s/g, '')
    setAmountRaw(raw)
    const parsed = parseFloat(raw)
    setAmount(!isNaN(parsed) && parsed >= 0 ? parsed : 0)
  }

  // Only show terms where at least one bank has data
  const availableTerms = TERM_OPTIONS.filter((m) =>
    banks.some((b) => b.rates.some((r) => r.months === m))
  )

  const updatedDate = new Date(updatedAt).toLocaleDateString('et-EE', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })

  return (
    <section className="space-y-6">
      {/* Input card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#1E40AF]">Arvuta hoiuse tootlus</h2>
          <span className="text-xs text-gray-400">Uuendatud: {updatedDate}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1">
            <label htmlFor="deposit-amount" className="block text-sm font-medium text-gray-700 mb-1">
              Hoiuse summa (€)
            </label>
            <div className="relative">
              <input
                id="deposit-amount"
                type="number"
                min={0}
                step={100}
                value={amountRaw}
                onChange={handleAmountChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-8 text-gray-900 shadow-sm focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition"
                placeholder="10000"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">€</span>
            </div>
          </div>

          <div className="flex-1">
            <label htmlFor="deposit-term" className="block text-sm font-medium text-gray-700 mb-1">
              Periood
            </label>
            <select
              id="deposit-term"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value) as TermMonths)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 outline-none transition bg-white appearance-none"
            >
              {availableTerms.map((m) => (
                <option key={m} value={m}>{m} {m === 1 ? 'kuu' : 'kuud'}</option>
              ))}
            </select>
          </div>
        </div>

        {results.length > 0 && (
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#EFF6FF] rounded-xl p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Parim intress</div>
              <div className="text-2xl font-bold text-[#1E40AF]">{results[0].rate.toFixed(2)} %</div>
              <div className="text-xs text-gray-600 mt-0.5">{results[0].bank.bank}</div>
            </div>
            <div className="bg-[#EFF6FF] rounded-xl p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">Maksimaalne tootlus</div>
              <div className="text-2xl font-bold text-green-700">+{formatEur(results[0].earned)}</div>
              <div className="text-xs text-gray-600 mt-0.5">{term} kuuga</div>
            </div>
            <div className="bg-[#EFF6FF] rounded-xl p-3 text-center col-span-2 sm:col-span-1">
              <div className="text-xs text-gray-500 mb-1">Lõppsumma</div>
              <div className="text-2xl font-bold text-gray-800">{formatEur(results[0].total)}</div>
              <div className="text-xs text-gray-600 mt-0.5">perioodi lõpus</div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {amount > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-[#1E40AF]">
              Tulemused — {term} {term === 1 ? 'kuu' : 'kuud'}, {formatEur(amount)}
            </h3>
          </div>

          {results.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              <p>Valitud perioodil ei leitud pakkumisi summale {formatEur(amount)}.</p>
            </div>
          ) : (
            <>
              {/* Mobile */}
              <div className="sm:hidden divide-y divide-gray-100">
                {results.map((row, i) => (
                  <div key={row.bank.bank} className="px-4 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#1E40AF]">{row.bank.bank}</span>
                        {i === 0 && (
                          <span className="text-xs font-semibold bg-amber-100 text-amber-700 rounded-full px-2 py-0.5">
                            Parim
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-[#1E40AF]">{row.rate.toFixed(2)} %</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span>Teenid: <span className="font-semibold text-green-700">+{formatEur(row.earned)}</span></span>
                      <span>Lõppsumma: <span className="font-semibold">{formatEur(row.total)}</span></span>
                    </div>
                    <a
                      href={row.bank.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-[#1E40AF] hover:bg-[#1e3a8a] text-white text-sm font-medium px-4 py-2 transition w-full"
                    >
                      Ava hoius
                    </a>
                  </div>
                ))}
              </div>

              {/* Desktop */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-5 py-3 text-left font-semibold text-gray-600">Pank</th>
                      <th className="px-5 py-3 text-center font-semibold text-gray-600">Intress (p.a.)</th>
                      <th className="px-5 py-3 text-right font-semibold text-gray-600">Teenitav intress</th>
                      <th className="px-5 py-3 text-right font-semibold text-gray-600">Lõppsumma</th>
                      <th className="px-5 py-3 text-center font-semibold text-gray-600"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {results.map((row, i) => (
                      <tr key={row.bank.bank} className={i === 0 ? 'bg-amber-50 hover:bg-amber-100/60 transition' : 'bg-white hover:bg-gray-50 transition'}>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#1E40AF]">{row.bank.bank}</span>
                            {i === 0 && (
                              <span className="text-xs font-semibold bg-amber-100 text-amber-700 rounded-full px-2 py-0.5 whitespace-nowrap">
                                Parim intress
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          <span className="text-lg font-bold text-[#1E40AF]">{row.rate.toFixed(2)} %</span>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <span className="font-semibold text-green-700">+{formatEur(row.earned)}</span>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <span className="font-semibold text-gray-800">{formatEur(row.total)}</span>
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          <a
                            href={row.bank.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg bg-[#1E40AF] hover:bg-[#1e3a8a] text-white text-sm font-medium px-4 py-2 transition whitespace-nowrap"
                          >
                            Ava hoius
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {belowMin.length > 0 && (
                <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                  <p className="text-xs text-gray-500">
                    Miinimumnõuet ei täida: {belowMin.map((b) => `${b.bank} (min. ${formatEur(b.min)})`).join(', ')}.
                  </p>
                </div>
              )}
              {noOffer.length > 0 && (
                <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                  <p className="text-xs text-gray-500">
                    Valitud perioodi ({term} kuud) ei paku: {noOffer.map((b) => b.bank).join(', ')}.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </section>
  )
}
