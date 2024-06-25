import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ticket.css'; // Custom CSS file
import logo from '../../../public/image/Logo.png'
const Ticket = () => {
    const location = useLocation();
    const bookingData = location.state;

    const downloadTicket = () => {
        const input = document.getElementById('ticket');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('ticket.pdf');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container my-5">
            <div id="ticket" className="ticket card p-4 shadow-lg position-relative">
                <div className="brand d-flex align-items-center mb-4">
                    <img src={logo} alt="Logo" className="logo me-3" />
                    <h2 className="brand-name">Amusement Park</h2>
                </div>
                <h1 className="text-center mb-4">Ticket Details</h1>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <p><strong>Customer Name:</strong> {bookingData.CustomerName}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Mobile No:</strong> {bookingData.MobileNo}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Email:</strong> {bookingData.Email}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Package:</strong> {bookingData.Packages}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Number Of Members:</strong> {bookingData.NumberOfMember}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Transaction ID:</strong> {bookingData.TransactionID}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Ticket Per Person:</strong> {bookingData.TicketPerPerson}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Total Payment:</strong> {bookingData.TotalPayment}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Claimed:</strong> {bookingData.Claimed}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Date:</strong> {bookingData.Date}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <p><strong>Payment Status:</strong> {bookingData.PaymentStatus}</p>
                    </div>
                </div>
            </div>
            <button onClick={downloadTicket} className="btn btn-primary mt-4 w-100">Download Ticket</button>
        </div>
    );
};

export default Ticket;
