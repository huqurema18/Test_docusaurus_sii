import React from 'react';
import * as MdIcons from 'react-icons/md'
import "./buttoncard.css"
export default function Highlight({children, color}) {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
              <MdIcons.MdPayments />
            </div>
            <div className="status-card__info">
              <p>{children}</p>
            </div>
        </div>
    );
  }