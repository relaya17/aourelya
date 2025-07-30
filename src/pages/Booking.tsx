import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    datetime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // כאן אפשר להוסיף שליחה לשרת או אימייל
    alert(`תודה ${form.name}, בקשתך נקלטה!`);
    setForm({ name: '', email: '', datetime: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent/10 py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-primary">קביעת פגישה</h2>
        
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        
        <input
          type="datetime-local"
          name="datetime"
          value={form.datetime}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary/90 transition"
        >
          שלח בקשה
        </button>
      </form>
    </div>
  );
};

export default Booking;
