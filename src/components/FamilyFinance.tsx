import React from 'react';
import { motion } from 'framer-motion';
import { Plus, UserPlus, Users } from 'lucide-react';

const FamilyFinance = () => {
  const members = [
    { name: 'Nithyasree', role: 'You', spent: 8450, budget: 15000, color: 'bg-primary', avatar: 'N' },
    { name: 'Mother', role: 'Admin', spent: 6200, budget: 10000, color: 'bg-pink-500', avatar: 'M' },
    { name: 'Father', role: 'Admin', spent: 12400, budget: 20000, color: 'bg-blue-500', avatar: 'F' },
    { name: 'Sibling', role: 'Member', spent: 3850, budget: 5000, color: 'bg-orange-500', avatar: 'S' },
  ];

  const totalSpent = members.reduce((acc, curr) => acc + curr.spent, 0);
  const totalBudget = members.reduce((acc, curr) => acc + curr.budget, 0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Manage Money <span className="text-gradient">Together</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Track individual spending, set shared budgets, and achieve family financial goals as a team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Family Summary */}
        <div className="lg:col-span-1 bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Users size={120} />
          </div>
          <h3 className="text-xl font-semibold text-slate-300 mb-6">Family Total (This Month)</h3>
          <p className="text-sm text-slate-400 mb-2">Total Spent</p>
          <h4 className="text-4xl font-bold mb-6">₹{totalSpent.toLocaleString()}</h4>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2 text-slate-300">
              <span>Budget Usage</span>
              <span>{Math.round((totalSpent/totalBudget)*100)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <div className="bg-gradient-primary h-3 rounded-full" style={{ width: `${(totalSpent/totalBudget)*100}%` }}></div>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-right">of ₹{totalBudget.toLocaleString()}</p>
          </div>

          <div className="space-y-3 mt-10">
            <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
              <Users size={18} /> Manage Family
            </button>
            <button className="w-full bg-slate-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors border border-slate-700">
              <UserPlus size={18} /> Add Member
            </button>
          </div>
        </div>

        {/* Member List */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${member.color} text-white flex items-center justify-center text-xl font-bold shadow-md`}>
                  {member.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg leading-tight">{member.name}</h4>
                  <p className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md inline-block mt-1">{member.role}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Spent</p>
                  <p className="font-bold text-xl">₹{member.spent.toLocaleString()}</p>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Budget Progress</span>
                    <span>₹{member.budget.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className={`${member.color} h-2 rounded-full`} style={{ width: `${(member.spent/member.budget)*100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add New Member Card */}
          <div className="bg-slate-50 rounded-[2rem] p-6 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 hover:border-primary/50 transition-all cursor-pointer min-h-[220px]">
             <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
               <Plus className="text-primary" size={24} />
             </div>
             <p className="font-medium text-slate-600">Invite Member</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyFinance;
