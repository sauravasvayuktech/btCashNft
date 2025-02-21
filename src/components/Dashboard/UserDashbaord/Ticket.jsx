import React from 'react'

const Ticket = () => {
    return (
        <>
            <div className='ticket bg-white ' style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/computer-keyboard-with-white-keyboard-gray-background_1208469-20.jpg?w=1800)" }}>
                <div className="row g-0">
                    <div className="col-3 px-0">
                        <img width={"100%"} className='ticketthumb' src="/src/assets/Images/solana.jpg" alt=""  />
                    </div>
                    <div className="col-6 text-center namendate align-content-center px-2">
                        <div className="name fs-6 fw-bold text-dark mb-2">
                            Pepe Power: Play & Win!
                        </div>
                        <div className="date fs14 fw-semibold text_slate">
                            20-2-2025
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center">
                        <div className="ticketnumber text-dark text-center fw-semibold">
                            752618
                            <div className='fs10 ms-1'>
                                Ticket Number
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ticket