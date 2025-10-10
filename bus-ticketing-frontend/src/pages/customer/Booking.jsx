import React, { useState } from 'react';
import '../../css/booking.css';

const TOTAL_SEATS = 40;
const SEATS_PER_ROW = 4;

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Seats booked: ${selectedSeats.join(', ')}`);
    // TODO: Add booking logic
  };

  // Generate seat layout
  const rows = [];
  for (let i = 0; i < TOTAL_SEATS / SEATS_PER_ROW; i++) {
    const rowSeats = [];
    for (let j = 1; j <= SEATS_PER_ROW; j++) {
      const seatNumber = i * SEATS_PER_ROW + j;
      if (seatNumber > TOTAL_SEATS) break;
      rowSeats.push(
        <button
          key={seatNumber}
          className={`seat-btn${selectedSeats.includes(seatNumber) ? ' selected' : ''}`}
          onClick={() => handleSeatClick(seatNumber)}
        >
          {seatNumber}
        </button>
      );
    }
    rows.push(
      <div className="seat-row" key={i}>
        {rowSeats}
      </div>
    );
  }

  return (
    <div className="booking-page">
      <h2 className="booking-title">Book Your Bus Seats</h2>
      <form onSubmit={handleSubmit}>
        <div className="seats-container">
          {rows}
        </div>
        <div className="selected-seats-info">
          Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
        </div>
        <button type="submit" className="booking-btn" disabled={selectedSeats.length === 0}>
          Book Selected Seats
        </button>
      </form>
    </div>
  );
};

export default Booking;
