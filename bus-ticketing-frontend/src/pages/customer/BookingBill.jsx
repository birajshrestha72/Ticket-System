import React, { useRef } from 'react';
import '../../css/bookingBill.css';

// Dummy data for demonstration
const billData = {
  bookingId: 'TKT123456',
  userName: 'John Doe',
  phone: '9800000000',
  vendor: 'ABC Travels',
  busNo: 'BA 2 KHA 1234',
  seats: [5, 6, 7],
  amount: 1500,
  date: '2025-10-10',
  paymentStatus: 'Paid',
};

const BookingBill = () => {
  const billRef = useRef();

  const handleDownload = () => {
    // Download as PDF using browser print
    window.print();
  };

  return (
    <div className="booking-bill">
      <h2 className="bill-title">Ticket Receipt</h2>
      <div className="bill-content" ref={billRef}>
        <div><strong>Booking ID:</strong> {billData.bookingId}</div>
        <div><strong>Name:</strong> {billData.userName}</div>
        <div><strong>Phone:</strong> {billData.phone}</div>
        <div><strong>Vendor:</strong> {billData.vendor}</div>
        <div><strong>Bus No:</strong> {billData.busNo}</div>
        <div><strong>Date:</strong> {billData.date}</div>
        <div><strong>Seats:</strong> {billData.seats.join(', ')}</div>
        <div><strong>Total Seats:</strong> {billData.seats.length}</div>
        <div><strong>Amount:</strong> Rs. {billData.amount}</div>
        <div><strong>Payment Status:</strong> {billData.paymentStatus}</div>
      </div>
      <button className="bill-download-btn" onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default BookingBill;
