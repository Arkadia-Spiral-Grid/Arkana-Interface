import React, { useState } from 'react';

function DonationForm() {
  const [amount, setAmount] = useState('');

  const handleDonation = (e) => {
    e.preventDefault();
    console.log('Donation amount:', amount);
    // Handle the donation logic here
  };

  return (
    <section id="donation">
      <h2>Support Arkadia</h2>
      <form onSubmit={handleDonation}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount"
        />
        <button type="submit">Donate</button>
      </form>
    </section>
  );
}

export default DonationForm;
