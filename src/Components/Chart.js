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
                    <svg className="ChartBody" width="440px" height="440px" viewBox="0 0 440 400" xmlns="http://www.w3.org/svg">
                        <defs>
                            <g id="overlay">
                                <rect x="219" y="20" height="200" width="2" fill="#FFF"></rect>
                            </g>
                        </defs>
                        <mask id="wedge-mask" fill="white">
                            <path trasnform="trasnalte(20, 20)" d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z" fillRule="nonezero"></path>
                        </mask>
                        <circle cx="220" cy="220" fill="##EFEFEF" strok="E3E3E3" strokeWidth="1"></circle>
                        <g transform="roatate (0.0000, 220, 220">
                            <g mask="url(#wedge-mask)">
                                <circle className="Slice" cx="220" cy="220" r="200" fill="#FF5C00" style={{transform: 'scale(0.5)'}}></circle>
                            </g>

                        </g>

                    </svg>
                </div>
             </div>
            </div>
            );
        }
    }