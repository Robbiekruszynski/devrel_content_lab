import React, { Component } from 'react';
import './Chart.css';

export default class Chart extends Component {
    state = {
        1: {
            spoke: 'Truffle',
            rotate: 'rotate(0.0000, 220, 220)',
            fill: '#FFSC00',
            transform: '0.1'

        },
        2: {
            spoke: 'Infura',
            rotate: 'rotate(45.0000, 220, 220)',
            fill: '#FFSC05',
            transform: '0.1'

        },
        3: {
            spoke: 'ConsenSys Quorum',
            rotate: 'rotate(90.0000, 220, 220)',
            fill: '#FFSC20',
            transform: '0.1'

        },
        4: {
            spoke: 'MetaMask',
            rotate: 'rotate(135.0000, 220, 220)',
            fill: '#FFSC50',
            transform: '0.1'

        },
        5: {
            spoke: 'Diligence',
            rotate: 'rotate(180.0000, 220, 220)',
            fill: '#FFSC50',
            transform: '0.1'

        },
    }
    render(){
        return(
            <div className="Content">
                <div className="SpokeBlock">
                    <ul>
                        <li>Content</li>
                    </ul>
              </div>
            <div className="ChartBlock">
                <div className="ChartShow" style={{width: '450px'}}>
                    Chart Here
                </div>
             </div>
            </div>
            );
        }
    }