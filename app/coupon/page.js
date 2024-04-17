// pages/coupon.js or pages/index.js
import React from 'react';
import "./style.css";
import Image from 'next/image';

const Coupon = () => {
    return (
        <div className="mainContent">
            <div className=" ticket">
                <div className="ticketMain">
                    <div className="header">COUPON FOR ×4 UGALI</div>
                    <div className="info passenger">
                        <div className="infoItem">REDEEMABLE AT:</div>
                        <div className="infoDetail">KFC KANGEMI</div>
                    </div>
                    <div className="info date">
                        <div className="infoItem">FOR:</div>
                        <div className="infoDetail">Our Lucky Customer</div>
                    </div>
                    <div className="info time">
                        <div className="infoItemmm">VALID ITEMS:</div>
                        <div className="infoDetaill">Ugali Original Recipe</div>
                        <div className="infoDetaill">Ugali Krispy Fries</div>
                        <div className="infoDetaill">Ugali Hot Crisps</div>
                        <div className="infoDetaill">Ugali Popcorn</div>
                    </div>
                    <div className="barr">
                        <Image className='qrcode' src="/scan.svg" alt="barcode" width={110} height={110} />
                    </div>
                    <div className="fineprint">
                        <p>Just present this coupon at the time of purchase to save on your favorite snack!</p>
                        <p>Limit one coupon per customer •</p>
                        <p>Offer valid only on ugali-based snack •</p>
                    </div>
                </div>
                <div className="ticketSide">
                    <div className="logo">
                        <p>KFC KANGEMI</p>
                    </div>
                    <div className="info sideDepart">
                        <div className="infoItem">REDEEM COUPON</div>
                        <div className="infoDetail">UG2024EXP0ALI</div>
                    </div>
                    <div className="info sideDate">
                        <div className="infoItem">Valid Before:</div>
                        <div className="infoDetail">9th May 2029</div>
                    </div>
                    <div className="barcode">
                        <div className="barcodeId">001256733</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupon;