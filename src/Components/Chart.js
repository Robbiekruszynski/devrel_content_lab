import React, { Component } from 'react';
import './Chart.css';
import Slices from './Slices/Slices';
import Progression from './Spokes/Progress';
export default class Chart extends Component {
    state = {
        slices: {
            1: {
                spoke: 'Truffle',
                rotate: 'rotate(0.0000, 220, 220)',
                fill: '#FF5C00',
                transform: '0.1'
            },
            2: {
                spoke: 'Infura',
                rotate: 'rotate(45.0000, 220, 220)',
                fill: '#9245FF',
                transform: '0.1'
            },
            3: {
                spoke: 'Diligence',
                rotate: 'rotate(90.0000, 220, 220)',
                fill: '#FF234B',
                transform: '0.1'
            },
            4: {
                spoke: 'ConsenSys Quorum',
                rotate: 'rotate(135.0000, 220, 220)',
                fill: '#357AFF',
                transform: '0.1'
            },
            5: {
                spoke: 'ConsenSys Academy',
                rotate: 'rotate(180.0000, 220, 220)',
                fill: '#E5AC00',
                transform: '0.1'
            },
            6: {
                spoke: 'MetaMask',
                rotate: 'rotate(225.0000, 220, 220)',
                fill: '#00AB3A',
                transform: '0.1'
            },
            7: {
                spoke: 'AMB',
                rotate: 'rotate(270.0000, 220, 220)',
                fill: '#00A9B5',
                transform: '0.1'
            },
            8: {
                spoke: 'BUIDL',
                rotate: 'rotate(315.0000, 220, 220)',
                fill: '#E5AC00',
                transform: '0.1'
            },
        }
    }
    render(){
        return(
            <div className="Content">
                <div className="SpokeBlock">
                    <ul>
                        <Progression
                        slices={this.state.slices}/>
                    </ul>
              </div>
              <div className="ChartBlock">
                    <div className="ChartPie" style={{width: '450px'}}>
                        <svg className="ChartPieChunk" width="440px" height="440px" viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <g id="overlay">
                                <rect x="219" y="20" height="200" width="2" fill="#FFF"></rect>
                                <g transform="translate(210, 10)">
                                    <path fill="#000"></path>
                                </g>
                            </g>
                        </defs>
                        <mask id="wedge-mask" fill="white">
                            <path transform="translate(20, 20)" d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z" fillRule="nonzero"></path>
                        </mask>
                        <circle cx="220" cy="220" r="200" fill="#EFEFEF" stroke="#E3E3E3" strokeWidth="1"></circle>
                            <Slices
                                slices={this.state.slices}
                            />
                            <use xlinkHref="#overlay" transform="rotate(19, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(63.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(108.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(153.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(198.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(243.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(288.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(333.7143, 220, 220)"></use>


                    </svg>
                </div>
             </div>
            </div>
            );
        }
    }