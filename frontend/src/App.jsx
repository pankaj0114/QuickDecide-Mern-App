import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { PlusCircle, Clock, CheckCircle2, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = 'http://localhost:5000/api/polls';

const App = () => {
  const [polls, setPolls] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    opt1: '',
    opt2: '',
    duration: 10,
  });

  useEffect(() => {
    fetchPolls();
  }, []);

  const fetchPolls = async () => {
    try {
      const res = await axios.get(API_URL);
      setPolls(res.data);
    } catch (error) {
      console.error('Error fetching polls:', error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, {
        question: formData.question,
        options: [formData.opt1, formData.opt2],
        duration: formData.duration,
      });
      setFormData({ question: '', opt1: '', opt2: '', duration: 10 });
      setShowForm(false);
      fetchPolls();
    } catch (error) {
      console.error('Error creating poll:', error);
    }
  };

  const handleVote = async (pollId, optionId) => {
    try {
      await axios.patch(`${API_URL}/${pollId}/vote`, { optionId });
      fetchPolls();
    } catch (err) {
      alert(err.response?.data?.message || 'Voting failed');
    }
  };

  const getWinner = (options) => {
    return options.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current,
    );
  };

  const filteredPolls = polls.filter((p) => {
    const isExpired = dayjs().isAfter(dayjs(p.expiresAt));
    if (filter === 'active') return !isExpired;
    if (filter === 'expired') return isExpired;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-slate-900 p-4 md:p-8">
      {/* Header */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center mb-12 p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-sm">
        <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent italic text-center">
          QuickDecide
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-indigo-200 active:scale-95"
        >
          <PlusCircle size={20} /> Create Poll
        </button>
      </nav>

      <main className="max-w-5xl mx-auto">
        {/* Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onSubmit={handleCreate}
              className="bg-white p-8 rounded-[2rem] shadow-2xl border-2 border-indigo-100 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

              <div className="md:col-span-2">
                <label className="block text-sm font-black text-indigo-900 mb-2 ml-1">
                  The Big Question?
                </label>
                <input
                  required
                  className="w-full p-4 bg-indigo-50/50 rounded-2xl border-2 border-transparent focus:border-indigo-400 focus:bg-white outline-none transition-all text-lg font-medium placeholder:text-slate-400"
                  placeholder="e.g. Which movie should we watch tonight?"
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  required
                  className="w-full p-4 bg-rose-50/50 rounded-2xl border-2 border-transparent focus:border-rose-400 focus:bg-white outline-none transition-all font-bold"
                  placeholder="Option 1"
                  value={formData.opt1}
                  onChange={(e) =>
                    setFormData({ ...formData, opt1: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  required
                  className="w-full p-4 bg-emerald-50/50 rounded-2xl border-2 border-transparent focus:border-emerald-400 focus:bg-white outline-none transition-all font-bold"
                  placeholder="Option 2"
                  value={formData.opt2}
                  onChange={(e) =>
                    setFormData({ ...formData, opt2: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-indigo-900 mb-2 ml-1">
                  Timer (Minutes)
                </label>
                <input
                  type="number"
                  className="w-full p-4 bg-amber-50/50 rounded-2xl border-2 border-transparent focus:border-amber-400 focus:bg-white outline-none transition-all"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                />
              </div>
              <button className="md:col-span-2 bg-slate-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-black transition-colors shadow-xl">
                🚀 Blast Off Poll
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: 'all', color: 'bg-indigo-600' },
            { id: 'active', color: 'bg-emerald-500' },
            { id: 'expired', color: 'bg-rose-500' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-8 py-2.5 rounded-xl capitalize font-black transition-all transform active:scale-90 shadow-md ${filter === f.id ? `${f.color} text-white ring-4 ring-white` : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {f.id}
            </button>
          ))}
        </div>

        {/* Poll Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPolls.map((poll) => {
            const isExpired = dayjs().isAfter(dayjs(poll.expiresAt));
            const totalVotes = poll.options.reduce(
              (sum, opt) => sum + opt.votes,
              0,
            );
            const winner = isExpired ? getWinner(poll.options) : null;

            return (
              <motion.div
                layout
                key={poll._id}
                className={`bg-white p-8 rounded-[2.5rem] border-b-8 shadow-xl transition-all hover:-translate-y-1 ${isExpired ? 'border-rose-400' : 'border-indigo-500'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${isExpired ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}
                  >
                    {isExpired ? (
                      <Clock size={14} />
                    ) : (
                      <CheckCircle2 size={14} />
                    )}
                    {isExpired ? 'Closed' : 'Live Now'}
                  </span>
                  <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-bold">
                    Ends: {dayjs(poll.expiresAt).format('h:mm A')}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-8 leading-tight text-slate-800">
                  {poll.question}
                </h3>

                <div className="space-y-4">
                  {poll.options.map((opt, index) => (
                    <button
                      key={opt._id}
                      disabled={isExpired}
                      onClick={() => handleVote(poll._id, opt._id)}
                      className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all group overflow-hidden ${isExpired ? 'border-slate-100 cursor-default' : 'border-indigo-50 hover:border-indigo-300 active:scale-95'}`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 transition-all duration-1000 ease-out opacity-20 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}
                        style={{
                          width: `${totalVotes > 0 ? (opt.votes / totalVotes) * 100 : 0}%`,
                        }}
                      />

                      <div className="relative flex justify-between items-center font-black">
                        <span className="flex items-center gap-2 text-slate-700">
                          {opt.text}
                          {winner?.text === opt.text && (
                            <Trophy
                              size={18}
                              className="text-amber-500 drop-shadow-md animate-bounce"
                            />
                          )}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-lg text-sm ${index % 2 === 0 ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}
                        >
                          {opt.votes}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                  <div className="text-slate-400 text-xs font-black uppercase tracking-widest">
                    Total Participation
                  </div>
                  <div className="text-indigo-600 font-black text-lg">
                    {totalVotes}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
