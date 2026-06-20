import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Calendar, Lock } from 'lucide-react';

export default function Overview() {
  const { currentUser, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('Timeline');

  return (
    <div className="min-h-screen bg-indigo-50/30 p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-indigo-700 to-pink-500 rounded-2xl p-8 text-center text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm mb-3">
              <span className="text-2xl font-bold font-devanagari">ॐ</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Krishna Janmashtami 2026 — Event Manager</h1>
            <p className="text-indigo-100 flex items-center gap-2 justify-center">
              ISKCON Pokhara <span className="opacity-50">|</span> 
              <span className="font-semibold text-white">Janmashtami: September 4, 2026</span> <span className="opacity-50">|</span> 
              Nanda Mahotsav: September 5
            </p>
          </div>
        </div>

        {/* Top Controls */}
        <div className="flex justify-end gap-3 items-center">
          {isAdmin && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium border border-green-200 shadow-sm">
              <Lock size={14} /> Admin Mode
            </div>
          )}
          <button className="flex items-center gap-2 bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium border shadow-sm hover:bg-gray-50 transition-colors">
            Log Out
          </button>
        </div>

        {/* Reward Banner */}
        <div className="bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl p-5 text-white shadow-md flex items-start gap-4">
          <div className="text-4xl mt-1">🕍</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Mayapur Dham Pilgrimage Reward</h3>
            <p className="text-yellow-50 text-sm leading-relaxed">
              Any single devotee whose total donation reaches <span className="font-bold text-white">NPR 2,00,000</span> receives a fully sponsored trip to Sri Mayapur Dham, West Bengal — courtesy of ISKCON Pokhara, as a token of gratitude for their seva. See the Donations tab for live tracking toward this honor.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {['Overview', 'Timeline', 'Donations', 'Budget', 'Volunteers', 'Checklist', 'Announcements'].map((tab, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm flex items-center gap-2 ${
                tab === activeTab 
                  ? 'bg-indigo-700 text-white shadow-indigo-200' 
                  : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-100'
              }`}
            >
              {tab === 'Overview' && <span className="text-lg">🗂️</span>}
              {tab === 'Timeline' && <span className="text-lg">📅</span>}
              {tab === 'Donations' && <span className="text-lg">💛</span>}
              {tab === 'Budget' && <span className="text-lg">💰</span>}
              {tab === 'Volunteers' && <span className="text-lg">👥</span>}
              {tab === 'Checklist' && <span className="text-lg">✅</span>}
              {tab === 'Announcements' && <span className="text-lg">📢</span>}
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <div className="space-y-6">
            {/* KPI Header */}
            <div className="grid grid-cols-4 gap-4 py-4">
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Days to Janmashtami</p>
            <p className="text-4xl font-light text-indigo-700">76</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Donations</p>
            <p className="text-4xl font-light text-indigo-700">NPR 0</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Volunteers</p>
            <p className="text-4xl font-light text-indigo-700">3</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tasks Done</p>
            <p className="text-4xl font-light text-indigo-700">0/48</p>
          </div>
        </div>

        {/* Two Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: Donation Goal Progress */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span>🌸</span> Donation Goal Progress
            </h3>
            
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-sm text-gray-500 font-medium">
                <span>Target: NPR 100,000</span>
                <span className="text-indigo-700 font-bold">0%</span>
              </div>
              <div className="w-full bg-indigo-50 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🪔', label: 'Deity decoration', target: 'NPR 15,000' },
                { icon: '🍲', label: 'Maha-prasad', target: 'NPR 30,000' },
                { icon: '🎵', label: 'Sound & lights', target: 'NPR 20,000' },
                { icon: '📜', label: 'Printing & invitations', target: 'NPR 10,000' },
                { icon: '🎭', label: 'Drama / performance', target: 'NPR 15,000' },
                { icon: '📕', label: 'Miscellaneous', target: 'NPR 10,000' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="opacity-80">{item.icon}</span>
                    {item.label}
                  </div>
                  <span className="font-semibold text-gray-700">{item.target}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Contacts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-pink-500">📞</span> Key Contacts
            </h3>
            
            <div className="space-y-5">
              {[
                { role: 'Event In-charge', name: 'Prabesh Prabhu', extra: 'ISKCON Pokhara', assigned: true },
                { role: 'Head Pujari', name: '[Assign]', extra: 'Deity seva', assigned: false },
                { role: 'Kirtan Leader', name: '[Assign]', extra: 'Mridanga & kirtan', assigned: false },
                { role: 'Prasad Coordinator', name: '[Assign]', extra: 'Kitchen seva', assigned: false },
                { role: 'Donation Desk', name: '[Assign]', extra: 'Accounts & receipts', assigned: false }
              ].map((contact, idx) => (
                <div key={idx} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-gray-800 text-sm mb-1">{contact.role}</p>
                  <p className={`text-sm ${contact.assigned ? 'text-gray-500' : 'text-gray-400'}`}>
                    {contact.name} <span className="mx-1">·</span> {contact.extra}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
          </div>
        )}

        {activeTab === 'Timeline' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📅</span>
                <h3 className="text-lg font-semibold text-gray-800">Full Plan — Today (Jun 20) to Janmashtami (Sept 4)</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                76-day plan organized into weekly phases, plus hour-by-hour schedules for Sept 4 (Janmashtami) and Sept 5 (Nanda Mahotsav). Click a phase to view/manage it. Pink tabs = the two event days.
              </p>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['Jun 20–30', 'Jul 1–15', 'Jul 16–31', 'Aug 1–15', 'Aug 16–25', 'Aug 26–31'].map(phase => (
                  <button key={phase} className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm border border-gray-200 text-gray-600 hover:bg-gray-50">
                    {phase}
                  </button>
                ))}
                <button className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm bg-indigo-800 text-white font-medium">
                  Sept 1–3
                </button>
                <button className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm border border-pink-300 text-pink-600 hover:bg-pink-50 flex items-center gap-1">
                  Sept 4 <span className="text-xs">🎉</span>
                </button>
                <button className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm border border-pink-300 text-pink-600 hover:bg-pink-50 flex items-center gap-1">
                  Sept 5 <span className="text-xs">🌸</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-gray-400">📋</span> Phase 7: Final 72 Hours <span className="text-gray-400 font-normal text-sm ml-1">(Sept 1 – Sept 3)</span>
                </h3>
                <span className="text-sm text-gray-500">6 items</span>
              </div>
              
              <div className="p-0">
                {[
                  { date: 'Sept 1', title: 'Core team final planning meeting', desc: 'Walk through full Sept 4–5 schedule with all department heads', tag: 'Meeting', tagColor: 'bg-orange-50 text-orange-700' },
                  { date: 'Sept 2', title: 'Kitchen prep & panchamrita ready', desc: 'Prepare panchamrita ingredients, pre-cook what can be made ahead', tag: 'Prasad', tagColor: 'bg-amber-100 text-amber-800' },
                  { date: 'Sept 2', title: 'Donation desk & reception setup', desc: 'Set up table, cash box, QR codes, signage, parking guidance', tag: 'Preparation', tagColor: 'bg-green-50 text-green-700' },
                  { date: 'Sept 3', title: 'Dress rehearsal — full run-through', desc: 'Drama, kirtan, arati sequence rehearsed top to bottom', tag: 'Drama', tagColor: 'bg-pink-50 text-pink-700' },
                  { date: 'Sept 3', title: 'Deity dressing & decoration finalized', desc: 'New outfit, garlands, jewellery placed and checked', tag: 'Puja/Seva', tagColor: 'bg-purple-50 text-purple-700' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 border-b border-gray-50 hover:bg-gray-50/50 transition-colors relative group">
                    <div className="flex-shrink-0">
                      <div className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {item.date}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded font-medium ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-lg">×</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
