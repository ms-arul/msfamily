import {
  Users,
  Crown,
  CheckCircle2
} from 'lucide-react';

const MEMBERS = [
  { name: 'Alex Morgan', role: 'Group Admin', avatar: 'AM', spent: '$2,845.00', color: 'from-indigo-500 to-purple-600', isOwner: true },
  { name: 'Sarah Jenkins', role: 'Family Member', avatar: 'SJ', spent: '$1,820.00', color: 'from-pink-500 to-rose-500', isOwner: false },
  { name: 'David Miller', role: 'Family Member', avatar: 'DM', spent: '$1,375.00', color: 'from-amber-500 to-orange-500', isOwner: false },
];

const FamilyFinance = () => {
  return (
    <section id="family" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Description */}
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users size={14} />
            <span>Collaborative Households</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
            Family Finances in <span className="text-gradient">Complete Harmony</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Create private family groups using invite codes. Track joint grocery, rent, and utility expenses in real-time, view who paid for what, and manage member permissions effortlessly.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 size={15} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Shared Bookkeeping & Settlement</h3>
                <p className="text-xs text-slate-300">Automatic balance calculation and split summaries for shared household expenditures.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 size={15} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Granular Role Management</h3>
                <p className="text-xs text-slate-300">Group Admins can invite or remove members, control proof document visibility, and lock financial categories.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 size={15} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Family Safety Tracking (Optional)</h3>
                <p className="text-xs text-slate-300">Live safety location sharing with strict 24-hour automatic database coordinate purging.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Family Card Mockup */}
        <div className="lg:w-1/2 w-full">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Active Group</span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Morgan Household</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                    Code: #MS-8921
                  </span>
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <Users size={14} className="text-indigo-400" />
                <span>3 Members</span>
              </div>
            </div>

            {/* Total Month Group Spend */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="text-slate-400">Total Group Monthly Spend</span>
                <span className="font-bold text-emerald-400">76% of Budget</span>
              </div>
              <div className="text-2xl font-black text-white mb-2">$6,040 <span className="text-xs text-slate-500 font-normal">/ $8,000</span></div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[76%] h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              </div>
            </div>

            {/* Member Contributions */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400">Member Contributions</span>
              {MEMBERS.map((member, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${member.color} flex items-center justify-center font-bold text-white text-xs shadow-sm`}>
                      {member.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">{member.name}</span>
                        {member.isOwner && (
                          <Crown size={12} className="text-yellow-400" />
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400">{member.role}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-white block">{member.spent}</span>
                    <span className="text-[10px] text-indigo-400">Logged</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyFinance;
